import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-firebase-header',
  styleUrl: './firebase-header.css',
  templateUrl: './firebase-header.html',
})
export class FirebaseHeader {
activeMenu = 'Run';
  openDropdown: string | null = null;

  searchText = '';
  selectedLanguage = 'English';
  darkMode = false;
  mobileMenuOpen = false;

  navItems = [
    { name: 'Build', dropdown: true },
    { name: 'Run', dropdown: true },
    { name: 'Solutions', dropdown: false },
    { name: 'Pricing', dropdown: false },
    { name: 'Docs', dropdown: true },
    { name: 'More', dropdown: true }
  ];

  dropdownItems: Record<string, string[]> = {
    Build: [
      'Authentication',
      'App Check',
      'Cloud Firestore',
      'Realtime Database',
      'Cloud Storage',
      'Firebase Hosting'
    ],
    Run: [
      'App Hosting',
      'Crashlytics',
      'Performance Monitoring',
      'Google Analytics',
      'Test Lab'
    ],
    Docs: [
      'Documentation',
      'Guides',
      'API Reference',
      'Code Samples'
    ],
    More: [
      'Community',
      'Extensions',
      'Partners',
      'Support'
    ]
  };

  languages = [
    'English',
    'Hindi',
    'French',
    'German',
    'Spanish',
    'Japanese'
  ];

  selectMenu(name: string): void {
    this.activeMenu = name;
    this.openDropdown = null;
    this.mobileMenuOpen = false;
  }

  toggleDropdown(name: string): void {
    this.openDropdown =
      this.openDropdown === name ? null : name;
  }

  selectLanguage(language: string): void {
    this.selectedLanguage = language;
    this.openDropdown = null;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  search(): void {
    if (this.searchText.trim()) {
      console.log('Search:', this.searchText);
    }
  }

  openConsole(): void {
    window.open(
      'https://console.firebase.google.com/',
      '_blank'
    );
  }

  @HostListener('document:click')
  closeDropdowns(): void {
    // Dropdowns are closed through the individual menu actions.
  }
  
}
