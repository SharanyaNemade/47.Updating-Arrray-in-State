In React, **state should never be changed directly**. Instead, you create a **new array** and update the state with that new array.

Think of it like this:

* ❌ Don't edit the original notebook.
* ✅ Make a photocopy, write your changes on the copy, and replace the old notebook with the new one.

---

## Why?

React checks whether the **reference** of the state has changed.

If you modify the existing array, React may not know anything changed, so it may not re-render the UI.

```javascript
// Wrong
items.push("Apple");
setItems(items);
```

Instead:

```javascript
// Correct
setItems([...items, "Apple"]);
```

---

# Example 1: Add an item

Suppose the state is:

```javascript
const [fruits, setFruits] = useState(["Apple", "Mango"]);
```

Current array:

```
["Apple", "Mango"]
```

Now add Orange.

```javascript
setFruits([...fruits, "Orange"]);
```

Result:

```
["Apple", "Mango", "Orange"]
```

Here,

```javascript
...fruits
```

copies all existing items.

Then

```javascript
"Orange"
```

is added at the end.

---

# Example 2: Remove an item

Current array

```
["Apple", "Mango", "Orange"]
```

Remove Mango.

```javascript
setFruits(
    fruits.filter(fruit => fruit !== "Mango")
);
```

Result

```
["Apple", "Orange"]
```

`filter()` returns a **new array** without `"Mango"`.

---

# Example 3: Update an item

Current array

```
["Apple", "Mango", "Orange"]
```

Change Mango to Banana.

```javascript
setFruits(
    fruits.map(fruit =>
        fruit === "Mango" ? "Banana" : fruit
    )
);
```

Result

```
["Apple", "Banana", "Orange"]
```

`map()` creates a **new array**, replacing only the matching item.

---

# Example 4: Add item at beginning

```javascript
setFruits(["Banana", ...fruits]);
```

Result

```
["Banana", "Apple", "Mango"]
```

---

# Example 5: Update an object inside an array

Suppose state is

```javascript
const [students, setStudents] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "David" }
]);
```

Update David to Peter.

```javascript
setStudents(
    students.map(student =>
        student.id === 2
            ? { ...student, name: "Peter" }
            : student
    )
);
```

Result

```javascript
[
  { id: 1, name: "John" },
  { id: 2, name: "Peter" }
]
```

Notice:

```javascript
{ ...student, name: "Peter" }
```

creates a **new object** with the updated name.

---

# Common Mistake

### ❌ Wrong

```javascript
fruits.push("Orange");
setFruits(fruits);
```

Here,

* `push()` changes the original array.
* React may not detect the change.

---

### ✅ Correct

```javascript
setFruits([...fruits, "Orange"]);
```

A new array is created.

---

# Visual Diagram

```
Before

State
 │
 ▼
["Apple", "Mango"]

        Add Orange

        ▼

New Array
["Apple", "Mango", "Orange"]

        ▼

setFruits(newArray)

        ▼

React notices a NEW reference

        ▼

Component Re-renders
```

---

# Quick Summary

| Operation            | Method            | Example                         |
| -------------------- | ----------------- | ------------------------------- |
| Add at end           | Spread (`...`)    | `setItems([...items, newItem])` |
| Add at beginning     | Spread (`...`)    | `setItems([newItem, ...items])` |
| Remove               | `filter()`        | `setItems(items.filter(...))`   |
| Update               | `map()`           | `setItems(items.map(...))`      |
| Replace entire array | Direct assignment | `setItems(newArray)`            |

### Rule to remember

**Never mutate the state directly.** Always create a **new array** (using methods like the spread operator, `map()`, `filter()`, or `concat()`) and pass that new array to the state setter. This allows React to detect the change and re-render the component correctly.
