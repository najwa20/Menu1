import { Component, OnInit } from '@angular/core';

interface MenuItem {
  title: string;
  iconClass?: string;
  children: MenuItem[];  // Ensure children is always an array
  expanded?: boolean;
  hovered?: boolean;
  
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isDarkTheme = false;
  activeItem: MenuItem | null = null;

    // Define a property to keep track of active parent item
    activeParentItem: any = null;

    // Example method to toggle child menu visibility
    toggleChildMenu(item: any): void {
      // Toggle activeParentItem to trigger CSS transitions
      this.activeParentItem = this.activeParentItem === item ? null : item;
    }
  
    // Method to check if a parent item is active
    isParentActive(item: any): boolean {
      return this.activeParentItem === item;
    }

  menuItems: MenuItem[] = [
    { title: 'Maileva', iconClass: 'fa-solid fa-paper-plane', children: [] },
    { title: 'Tickets & Support', iconClass: 'fa-solid fa-ticket-alt', children: [] },
    { title: 'Drive', iconClass: 'fa-solid fa-cloud', children: [] },
    {
      title: 'Paramètres', iconClass: 'fa-solid fa-cogs', children: [
        {
          title: 'Admin', iconClass: 'fa-solid fa-cog', children: [
            {
              title: 'Commercial', iconClass: 'fa-solid fa-chart-line', children: [
                { title: 'Campagnes', iconClass: 'fa-solid fa-cubes', children: [] },
                { title: 'Workflow Commercial', iconClass: 'fa-solid fa-stopwatch', children: [] },
                { title: 'Statuts avant-vente', iconClass: 'fa-solid fa-lightbulb', children: [] },
                { title: 'Services avant-vente', iconClass: 'fa-solid fa-toolbox', children: [] },
              ], expanded: false
            },
            {
              title: 'Productions', iconClass: 'fa-solid fa-chart-pie', children: [
                { title: 'Service après-vente', iconClass: 'fa-solid fa-lightbulb', children: [] },
                { title: 'Statuts après-vente', iconClass: 'fa-solid fa-toolbox', children: [] },
                { title: 'Workflow Production', iconClass: 'fa-solid fa-braille', children: [] },
              ], expanded: false
            },
            {
              title: 'Catalogues', iconClass: 'fa-solid fa-tags', children: [
                { title: 'Produits', iconClass: 'fa-solid fa-clipboard', children: [] },
                { title: 'Compagnies', iconClass: 'fa-solid fa-laptop-house', children: [] },
                { title: 'Gammes', iconClass: 'fa-solid fa-clone', children: [] },
                { title: 'Lignes des Produits', iconClass: 'fa-solid fa-clipboard-list', children: [] },
                { title: 'Catégories ticket', iconClass: 'fa-solid fa-tags', children: [] },
                { title: 'Mots-clés', iconClass: 'fa-solid fa-hashtag', children: [] },
                { title: 'Garanties', iconClass: 'fa-solid fa-th-large', children: [] },
                { title: 'Groupes garanties', iconClass: 'fa-solid fa-file', children: [] },
              ], expanded: false
            },
          ], expanded: false
        },
        {
          title: 'Utilisateurs', iconClass: 'fa-solid fa-users-cog', children: [
            { title: 'Roles', iconClass: 'fa-solid fa-sitemap', children: [] },
            { title: 'Utilisateurs', iconClass: 'fa-solid fa-users', children: [] },
            { title: 'Groupes', iconClass: 'fa-solid fa-object-group', children: [] },
            { title: 'Menu', iconClass: 'fa-solid fa-align-justify', children: [] },
            { title: 'Organismes', iconClass: 'fa-solid fa-building', children: [] },
          ], expanded: false
        },
        { title: 'Parametre Globaux', iconClass: 'fa-solid fa-user-cog', children: [] },
      ], expanded: false
    },
    { title: 'Webmail', iconClass: 'fa-solid fa-envelope', children: [] },
    {
      title: 'Editique', iconClass: 'fa-solid fa-book-open', children: [
        { title: 'Courrier', iconClass: 'fa-solid fa-at', children: [] },
        { title: 'SMS', iconClass: 'fa-solid fa-envelope', children: [] },
        { title: 'Type Documents', iconClass: 'fa-solid fa-id-card', children: [] },
      ], expanded: false
    },
    { title: 'Affaire', iconClass: 'fa-solid fa-file-contract', children: [] },
    { title: 'Tâches', iconClass: 'fa-solid fa-tasks', children: [] },
    { title: 'Prospects/Clients', iconClass: 'fa-solid fa-users', children: [] },
    { title: 'Échéanciers', iconClass: 'fa-solid fa-money-check-alt', children: [] },
    { title: 'Banque', iconClass: 'fa-solid fa-table', children: [] },
    { title: 'Agenda', iconClass: 'fa-solid fa-calendar-days', children: [] },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleChildren(item: MenuItem, event: Event) {
    event.stopPropagation();
    item.expanded = !item.expanded;
  }

  toggleActiveItem(item: MenuItem, event: Event) {
    event.stopPropagation();
    if (this.activeItem === item) {
      this.activeItem = null;
    } else {
      this.activeItem = item;
    }

    if (item.children) {
      item.expanded = !item.expanded;
    }
  }

  onMouseEnter(item: MenuItem) {
    item.hovered = true;
  }

  onMouseLeave(item: MenuItem) {
    item.hovered = false;
  }

  // Method to safely get children or an empty array
  getChildren(item: MenuItem): MenuItem[] {
    return item.children || [];
  }

 
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.classList.add(theme);
  }
  
  constructor() { }

  ngOnInit(): void { }
}
