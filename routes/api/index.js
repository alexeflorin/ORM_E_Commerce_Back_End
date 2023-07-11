const router = require('express').Router();
// require express module and create a new router instance

const categoryRoutes = require('./category-routes');
// require the categoryRoutes module

const productRoutes = require('./product-routes');
// require the tagRoutes module

const tagRoutes = require('./tag-routes');
// require the tagRoutes module


router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
//  use categories for categoryRoutes, products for productRoutes, tags for tagRoutes

module.exports = router;
//  export the router instance for use in other files