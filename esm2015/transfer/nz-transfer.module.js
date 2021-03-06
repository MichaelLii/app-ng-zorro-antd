/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from '../button/nz-button.module';
import { NzCheckboxModule } from '../checkbox/nz-checkbox.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzInputModule } from '../input/nz-input.module';
import { NzTransferListComponent } from './nz-transfer-list.component';
import { NzTransferSearchComponent } from './nz-transfer-search.component';
import { NzTransferComponent } from './nz-transfer.component';
export class NzTransferModule {
}
NzTransferModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule],
                declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                exports: [NzTransferComponent]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL256LXRyYW5zZmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNOzs7WUFMTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFPLENBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUU7Z0JBQ3hILFlBQVksRUFBRSxDQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixDQUFFO2dCQUN6RixPQUFPLEVBQU8sQ0FBRSxtQkFBbUIsQ0FBRTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL256LWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L256LWNoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L256LWlucHV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei10cmFuc2Zlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRyYW5zZmVyU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IE56VHJhbnNmZXJDb21wb25lbnQgfSBmcm9tICcuL256LXRyYW5zZmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekNoZWNrYm94TW9kdWxlLCBOekJ1dHRvbk1vZHVsZSwgTnpJbnB1dE1vZHVsZSwgTnpJMThuTW9kdWxlLCBOekljb25Nb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIE56VHJhbnNmZXJDb21wb25lbnQsIE56VHJhbnNmZXJMaXN0Q29tcG9uZW50LCBOelRyYW5zZmVyU2VhcmNoQ29tcG9uZW50IF0sXG4gIGV4cG9ydHMgICAgIDogWyBOelRyYW5zZmVyQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2Zlck1vZHVsZSB7XG59XG4iXX0=