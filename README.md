# sprint-review-groceries
a little sprint review for you ♥️

## Welcome developers! Please follow these steps to get started 👇

- [ ] fork & clone this project 
- [ ] `cd` into your project 
- [ ] create your own branch - `firstname-lastname`
- [ ] `npm i` to get all node dependencies 

## We will be building a project that follows these guidlines

- [ ] a `store` can have multiple `groceries` 
- [ ] a `grocery` belongs to only one `store`
- [ ] a `store` can use multiple `supplies`. Examples of some `supplies` would be: reusable grocery bags, cart, grocery list, pen
- [ ] the same `supplies` can be used in mulitple `stores`
- [ ] when adding a `grocery` the client must provide a `id` of an existing `store`

## Schema 
**please follow this schema when building your db tables**

| Table Names | Requirements | Entities
| -------------- | ---------- | ------------------ |
| store  | name | unique ID(integer), name(string), location(string), completed(boolean)  |
| gorceries | store_id, name | unique ID(integer), store_id(matches with store ID in the store table, integer) name(string), completed(boolean)  |
| supplies | store_id, name | unique ID(integer), store_id(matches with store ID in the store table, integer), name(string), in_use(boolean) |
| store_groceries_supplies *a table to combine everything* | store_id, grocery_id, supplies_id | store_id(matches with the store ID in the store table, integer), grocery_id(matches with the grocery ID in the groceries table, integer), supplies_id(matches with the supplies ID in the supplies table) | 

**as you build these tables, think about the relationships between them**

