# sprint-review-groceries
a little sprint review for you ♥️

## Welcome developers! Please follow the steps to get started 👇

- [ ] clone this project 
- [ ] `cd` into your project 
- [ ] create your own branch name - `firstname-lastname`
- [ ] `npm i` to get all node dependencies 

## We will be building a project that follows these guidlines

- [ ] a `store` can have multiple `gorceries` 
- [ ] a `grocery` belongs to only one `store` - one to one relationship
- [ ] a `store` can use multiple `supplies` Example of some `supplies` would be: reusable grocery bags, cart, grocery list, pen - one to many relationship 
- [ ] the same `supplies` can be used in mulitple `stores`
- [ ] when adding a `grocery` the client must provide a `id` of an existing `store`

## Schema 
**please follow this schema when building your db tables**

| Table Names | Requirements | Entities
| ------- | ---- | ---------- |
| store  | name | unique ID(integer), name(string), location(string), completed(boolean)  |
| gorceries | store_id, name | unique ID(integer), store_id(matches with store ID, integer) name(string), completed(boolean)  |
| supplies | name | unique ID(integer), name(string), in_use(boolean) |

