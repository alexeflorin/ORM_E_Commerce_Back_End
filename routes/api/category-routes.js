
//  perform create, read, update, and delete for category-routers
//  route uses async/await with 'try-catch' block for error handling

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesAll = await Category.findAll({
      include: [{ model: Product, 
      attributes: ['id', 'product_name', 'price','stock', 'category_id']}],
    });
    res.status(200).json(categoriesAll);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryOne = await Category.findByPk(req.params.id, {
      include: [{ model: Product, 
      attributes: ['id', 'product_name', 'price','stock', 'category_id']}],
    });
    if (!categoryOne) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryOne);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryNew = await Category.create(req.body);
    res.status(200).json(categoryNew);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryUpdate[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryUpdate);
  } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryDelete) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// exports the router

