```
type ProductType<T extends string> = `Prodact_${T}`;

type Prodact<T extends string = string> = {
  id: string;
  name: string;
  type: ProductType<T>;
};

type Quotation<P extends Prodact = Prodact> = {
  id: string;
  productId: string;
  productType: P["type"];
  price: number;
};

declare const keyHolder: Prodact & {type: "Prodact_KeyHolder"}

const keyHolderGoodQuotation: Quotation<typeof keyHolder> = {
  id: "quotation_q1",
  productId: "product_p1",
  productType: "Prodact_KeyHolder",
  price: 42_000,
};

const keyHolderBadQuotation: Quotation<typeof keyHolder> = {
  id: "quotation_q2",
  productId: "product_p2",
  productType: "Prodact_Leaflet",
  price: 10_000
};
```

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## 型安全性の問題と解決策

このコードには**型の整合性が崩れる根本的な問題**が存在します。
主な原因は`Prodact`型の設計と`Quotation`型のジェネリック制約にあります。

---

### 問題の核心

1. **`Prodact`型のデフォルトパラメータ問題**

```typescript
type Prodact<T extends string = string> = {
  type: ProductType<T>; // デフォルトで`Prodact_string`になる
};
```

    - デフォルト型パラメータが`string`のため、`Prodact`単体では`type`が`Prodact_string`になる
    - しかし`keyHolder`では`type: "Prodact_KeyHolder"`を強制している
2. **`Quotation`型のジェネリック制約の不整合**

```typescript
type Quotation<P extends Prodact = Prodact> = {
  productType: P["type"]; // デフォルトで`Prodact_string`型を期待
};
```

    - デフォルトの`Prodact`が`Prodact<string>`であるため、`productType`は`Prodact_string`型と推論される
    - 実際の使用時には`Prodact_KeyHolder`などの具体型が代入されるため矛盾が発生

---

### 具体的なエラー発生メカニズム

`keyHolderBadQuotation`で発生するエラー：

```typescript
productType: "Prodact_Leaflet" // エラー内容：
// Type '"Prodact_Leaflet"' is not assignable to type '"Prodact_KeyHolder"'
```

**原因の流れ**：

1. `keyHolder`の型が`Prodact & {type: "Prodact_KeyHolder"}`と定義
2. `Quotation<typeof keyHolder>`の`productType`が`"Prodact_KeyHolder"`型と推論
3. 異なる文字列`"Prodact_Leaflet"`を代入しようとすると型エラー

---

### 解決策

#### 1. タイポ修正と型設計の見直し

```typescript
// タイポ修正
type ProductType<T extends string> = `Product_${T}`;

// ジェネリックパラメータの明示化
type Product<T extends string = "Base"> = {
  id: string;
  name: string;
  type: ProductType<T>;
};
```


#### 2. `Quotation`型の再定義

```typescript
type Quotation<P extends Product<string> = Product<"Base">> = {
  id: string;
  productId: string;
  productType: P["type"]; // 具体型が確定する
  price: number;
};
```


#### 3. 正しい型付き変数定義

```typescript
declare const keyHolder: Product<"KeyHolder">;

const keyHolderQuotation: Quotation<typeof keyHolder> = {
  productType: "Product_KeyHolder" // ✅ 自動的に型チェック
};
```


---

## 修正後の完全なコード

```typescript
type ProductType<T extends string> = `Product_${T}`;

type Product<T extends string = "Base"> = {
  id: string;
  name: string;
  type: ProductType<T>;
};

type Quotation<P extends Product<string> = Product<"Base">> = {
  id: string;
  productId: string;
  productType: P["type"];
  price: number;
};

declare const keyHolder: Product<"KeyHolder">;

const validQuotation: Quotation<typeof keyHolder> = {
  id: "q1",
  productId: "p1",
  productType: "Product_KeyHolder", // ✅ OK
  price: 42000
};

const invalidQuotation: Quotation<typeof keyHolder> = {
  id: "q2",
  productId: "p2",
  productType: "Product_Leaflet", // ❌ 型エラー
  price: 10000
};
```


---

## 型安全性が確保される仕組み

| 要素 | 修正前 | 修正後 | 効果 |
| :-- | :-- | :-- | :-- |
| 型名 | Prodact | Product | 意図しない型の混入防止 |
| テンプレートリテラル | Prodact_ | Product_ | 一貫性の確保 |
| デフォルト型パラメータ | string | "Base" | 具体型の明確化 |
| ジェネリック制約 | Prodact | Product<string> | 許容範囲の明確化 |

この設計により、`productType`に不正な文字列を代入しようとするとコンパイルエラーが発生し、実行時エラーを未然に防げます。


