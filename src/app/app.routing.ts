import { Routes, RouterModule } from '@angular/router';

// Component List

// Student
import { HomeComponent } from './home/home.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { StudentSelectComponent } from './student-select/student-select.component';
import { AttendComponent } from './attend/attend.component';

// chime
import { ChimeComponent } from "./chime/chime.component";

// selectFunction
import { SelectFunctionComponent } from './select-function/select-function.component';

// operation
import { OperationComponent } from './operation/operation.component';

// error
import { ErrorComponent } from './error/error.component'

/**
 * ルーティング基本設定
 */
const myRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'monthselect', component: MonthSelectComponent },
    { path: 'studentselect/:month', component: StudentSelectComponent },
    { path: 'studentselect/:month/:nightFlg', component: StudentSelectComponent },
    { path: 'attend', component: AttendComponent },
    { path: 'chime', component: ChimeComponent },
    { path: 'functionselect', component: SelectFunctionComponent },
    { path: 'operation', component: OperationComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/' }
]

/**
 * ルーティング基本設定反映定数
 */
export const Routing = RouterModule.forRoot(myRoutes);