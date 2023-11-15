import { Injectable } from '@angular/core';
import { Iproduit } from '../model/iproduit';
import { Icategorie } from '../model/icategorie';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public static getCategories() {
    throw new Error('Method not implemented.');
  }
  public static getProducts() {
    throw new Error('Method not implemented.');
  }
  private categories : Icategorie[] = [
    {
      id : 1,
      nom : "Pizza",
      description : "Pizza"
    },
    {
      id : 2,
      nom : "Pasta",
      description : "Pasta"
    },
    {
      id : 3,
      nom : "Salad",
      description : "Salad"
    },
    {
      id : 4,
      nom : "Dessert",
      description : "Dessert"
    },
    {
      id : 5,
      nom : "Drinks",
      description : "Drinks"
    }
  ];
  private Products : Iproduit[] = [
    {
      id : 1,
      nom : "Pizza aux fruits de mer",
      prix : 10,
      ingredients : ["Fruits de mer", "Tomate", "Fromage"],
      image : ["http://lapetitechaumette.l.a.pic.centerblog.net/PIZZ_AUX_FRUITS_DE_MER.png"],
      categorie : this.categories[0]
    },
    {
      id : 2,
      nom : "Jus de fruits",
      prix : 5,
      ingredients : ["Banane", "Orange", "Pomme" , "Fraise"],
      image : ["https://th.bing.com/th/id/OIP.N60SM6q_rciEYyQQe7j3owHaHa?pid=ImgDet&rs=1"],
      categorie : this.categories[4]
    }
  ];
  // get all categories
  public getCategories() : Icategorie[]{
    return this.categories;
  }
  // get all products
  public getProducts() : Iproduit[]{
    return this.Products;
  }
  // get product by id
  public getProductById(id : Number) : Iproduit | undefined {
    return this.Products.find(p => p.id === id);
  }
  // get products by category
  public getProductsByCategory(id : Number) : Iproduit[]{
    return this.Products.filter(p => p.categorie.id == id);
  }
  // add product
  public addProduct(product : Iproduit) : void {
    this.Products.push(product);
  }
  // delete product
  public deleteProduct(id : Number) : void {
    this.Products = this.Products.filter(p => p.id !== id);
  }
  // update product
  public updateProduct(product : Iproduit) : void {
    this.Products.forEach(p => {
      if(p.id === product.id){
        p.nom = product.nom;
        p.prix = product.prix;
        p.ingredients = product.ingredients;
        p.image = product.image;
        p.categorie = product.categorie;
      }
    });
  }
  // get categories by id
  public getCategoryById(id : Number) : Icategorie | undefined {
    return this.categories.find(c => c.id === id);
  }
  // add category
  public addCategory(category : Icategorie) : void {
    this.categories.push(category);
  }
  // delete category
  public deleteCategory(id : Number) : void {
    this.categories = this.categories.filter(c => c.id !== id);
  }
  // update category
  public updateCategory(category : Icategorie) : void {
    this.categories.forEach(c => {
      if(c.id === category.id){
        c.nom = category.nom;
        c.description = category.description;
      }
    });
  }
  constructor() { }
}
