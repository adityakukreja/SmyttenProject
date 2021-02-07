import { Component, OnInit } from '@angular/core';
import * as items from '../../assets/items.json'
import * as store from '../../assets/store.json'
import { ItemModel, ProductModel, StoreModel } from './items.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mssg : boolean = true;
  item : ProductModel[] = (items as any).default;
  stores : StoreModel[]=(store as any).default;
  searchList : StoreModel[]=[];
  storeFilterdList : any[]=[];
  searchValue:string="";
  constructor() { }

  ngOnInit(): void {
    this.searchList=this.stores;
    this.sortStoreList();
  }

 sortStoreList(){
  const sorted = this.stores.sort((a,b) => a.name > b.name ? 1 : -1);

  const grouped = sorted.reduce((groups, contact) => {
    const letter = contact.name.charAt(0);

    groups[letter] = groups[letter] || [];
    groups[letter].push(contact);

    return groups;
  }, {})

  this.storeFilterdList = Object.keys(grouped).map(key => ({key,namesList : grouped[key]}));
  
  console.log(this.storeFilterdList)
 }

  addActive(val : any){
    if(document.getElementById(val).classList.contains("active")){
      document.getElementById(val).classList.remove("active")
      this.mssg=true;
    }
    else{
      document.getElementById(val).classList.add("active")
      this.mssg=false;
    }
  }

  searchProducts(){
    console.log(this.searchValue)
    this.stores = [];
    for(let val of this.searchList){
      if(val.name.toLowerCase().includes(this.searchValue.toLowerCase())){
        this.stores.push(val);
      }
    }
    this.sortStoreList();
  }

}
