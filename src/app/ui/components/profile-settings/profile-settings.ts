import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  imports: [],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss',
})
export default class ProfileSettings {
  /** Notification count badge */
  notificationCount = 3;

  /** User display name */
  userName = 'Camilo R.';

  /** Whether search input is expanded (mobile) */
  isSearchOpen = false;

  /** Handles search icon click */
  onSearchClick(): void {
    this.isSearchOpen = !this.isSearchOpen;
    console.log('Search toggled');
  }

  /** Handles notification bell click */
  onNotificationsClick(): void {
    console.log('Notifications clicked');
  }

  /** Handles profile/avatar click */
  onProfileClick(): void {
    console.log('Profile clicked');
  }

  /** Handles dropdown toggle */
  onDropdownToggle(): void {
    console.log('Dropdown toggled');
  }
}
