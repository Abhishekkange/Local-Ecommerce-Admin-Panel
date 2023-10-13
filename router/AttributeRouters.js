const express = require('express');
const Router = express.Router();
const Category = require('../Models/Categories'); 
const Subcategory = require('../Models/Subcategories');
const brand = require('../Models/Brands');
const Size = require('../Models/Size');


//fetch all categories
Router.get('/api/getAllCategories', async (req, res) => {
    try {
        const allCategoryList = await Category.find(); 
        res.json(allCategoryList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//fetch all Brands

Router.get('/api/getAllBrands', async (req, res) => {
    try {
        const allBrandList = await brand.find();
        res.json(allBrandList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//fetch all subcategiries

Router.get('/api/getAllSubCategories', async (req, res) => {
    try {
        const allSubategoryList = await  Subcategory.find(); 
        res.json(allSubategoryList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//fetch all sizes

Router.get('/api/getAllSizes', async (req, res) => {

    try {
        const allSizeList = await  Size.find(); 
        res.json(allSizeList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create new catgory
Router.post('/api/createCategory', (req, res) => {

    try {
        const name  = req.body.name;
        const newCategory = new Category({ "categoryName": name }); 
        newCategory.save({categoryName:name});
        res.json("categroy created successfully");

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//create subcategories
Router.post('/api/createSubcategory', (req, res) => {
    try {
        const name  = req.body.name;


        const newSubcategory = new Subcategory({ "SubcategoryName": name }); // Corrected field name

        newSubcategory.save({SubcategoryName:name});

        res.json("Subcategroy created successfully");

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//create brand
Router.post('/api/createBrand', (req, res) => {
    try {
        const name  = req.body.name;


        const newBrand = new brand({ "brandName": name }); // Corrected field name

        newBrand.save({brandName:name});

        res.json("brand created successfully");

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//create subcategories
Router.post('/api/createSubcategory', (req, res) => {
    try {
        const name  = req.body.name;


        const newSubcategory = new Subcategory({ "SubcategoryName": name }); // Corrected field name

        newSubcategory.save({SubcategoryName:name});

        res.json("Subcategroy created successfully");

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//create size
Router.post('/api/createSize', (req, res) => {
    try {
        const name  = req.body.name;


        const newSize = new Size({ "size": name }); // Corrected field name

        newSize.save({size:name});

        res.json("size created successfully");

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//Route to delete a category from database
Router.post('/api/deleteCategory',async(req,res)=>{

    const id = req.body._id;

    const deleteCategory = await Category.findByIdAndRemove(id);

    if(!deleteCategory)
    {
        res.json({"message":"Category Not found"});
    }
    else{

        res.json({"Message":"category Deleted"});
    }
  
});

//Route to delete a subcategory from database
Router.post('/api/deleteSubcategory',async(req,res)=>{

    const id = req.body._id;

    const deleteSubcategory = await Subcategory.findByIdAndRemove(id);

    if(!deleteSubcategory)
    {
        res.json({"message":"subcategory Not found"});
    }
    else{

        res.json({"Message":"subcategory Deleted"});
    }
  
});


Router.post('/api/deleteBrand',async(req,res)=>{

    const id = req.body._id;

    const deleteBrand = await brand.findByIdAndRemove(id);

    if(!deleteBrand)
    {
        res.json({"message":"brand Not found"});
    }
    else{

        res.json({"Message":"brand Deleted"});
    }
  
});

//delete sizes

Router.post('/api/deleteSize',async(req,res)=>{

    const id = req.body._id;

    const deleteSize = await Size.findByIdAndRemove(id);

    if(!deleteSize)
    {
        res.json({"message":"size Not found"});
    }
    else{

        res.json({"Message":"size Deleted"});
    }
  
});




module.exports = Router;

