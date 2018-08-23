import { AfterViewInit } from '@angular/core';
import { NavParams, NavController, Searchbar, InfiniteScroll } from 'ionic-angular';
import { SelectSearchable } from './select-searchable.component';
export declare class SelectSearchablePage implements AfterViewInit {
    private navParams;
    selectComponent: SelectSearchable;
    filteredItems: any[];
    selectedItems: any[];
    navController: NavController;
    infiniteScroll: InfiniteScroll;
    searchbarComponent: Searchbar;
    constructor(navParams: NavParams);
    ngAfterViewInit(): void;
    isItemSelected(item: any): boolean;
    deleteSelectedItem(item: any): void;
    addSelectedItem(item: any): void;
    select(item: any): void;
    ok(): void;
    close(): void;
    reset(): void;
    filterItems(): void;
    getMoreItems(infiniteScroll: InfiniteScroll): void;
}
