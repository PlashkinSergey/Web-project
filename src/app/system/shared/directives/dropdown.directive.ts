import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class Dropdown {
    @HostBinding('class.profile') isOpen = true;
    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
    }
}