
# 📘 PostgreSQL Indexing Notes

Indexing in PostgreSQL is a technique to **speed up data retrieval** by creating a separate data structure that avoids full table scans.

---

## 🔹 Why Use Indexing?

✅ Fast `SELECT`, `JOIN`, `WHERE`, `ORDER BY`  
✅ Enforces `UNIQUE`  
❌ Slower `INSERT/UPDATE/DELETE`, uses extra space

---

## 🔹 How It Works

Think of it like a phonebook. Instead of scanning all rows, PostgreSQL jumps to matches using the index.

```sql
SELECT * FROM posts WHERE user_id = 1;
````

Index helps find `user_id = 1` rows fast.

---

## 🔹 Create Index

```sql
CREATE INDEX idx_user_id ON posts(user_id);
```

---

## 🔹 Types of Indexes

| Type   | Use Case                                       |
| ------ | ---------------------------------------------- |
| B-Tree | Default, for `=`, `<`, `>`, `BETWEEN`          |
| Hash   | Only equality `=`                              |
| GIN    | Arrays, `jsonb`, full-text search              |
| GiST   | Geometric or full-text data                    |
| BRIN   | Huge tables, natural order (e.g., time-series) |

---

## 🔹 Composite Index

For multi-column filtering:

```sql
CREATE INDEX idx_user_status ON posts(user_id, status);
```

> ⚠️ Order matters. `(user_id)` works, `(status)` alone won't.

---

## 🔹 Check If Index is Used

```sql
EXPLAIN SELECT * FROM posts WHERE user_id = 1;
```

Shows:
`Index Scan using idx_user_id ...` → ✅
`Seq Scan on posts` → ❌ (not using index)

---

## 🔹 When NOT to Use Index

* Very small tables
* Low-variance columns (e.g., boolean)
* Highly updated columns

---

## 🔹 Drop Index

```sql
DROP INDEX idx_user_id;
```

---

## 🧠 Optional: What is `ctid`?

* Every row has a hidden ID like `(block, row)`
* Index maps `column_value → ctid`
* You don’t need to worry about this in normal usage

---

## ✅ Quick Cheatsheet

| Concept   | Meaning                         |
| --------- | ------------------------------- |
| Index     | Speeds up queries               |
| B-Tree    | Most common/default index type  |
| Composite | Index with multiple columns     |
| `EXPLAIN` | Check if index is being used    |
| Trade-off | Faster reads, but slower writes |

---

```

Let me know if you'd like a `.md` file download or want to include examples for a specific table like `users`, `posts`, etc.
```
