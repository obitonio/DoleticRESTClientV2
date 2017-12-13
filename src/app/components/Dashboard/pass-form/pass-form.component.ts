import { Component } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {EditPassword} from '../../../entities/edit-password';
import {NewPassword} from '../../../entities/password.new';

@Component({
    selector: 'doleticApp',
    templateUrl: './heroes.component.html'
})

export class PassFormComponent {

    constructor ( private userService : UserService) { }

    updatePassword(userPwd) {
        var newPassword = new NewPassword(userPwd.first, userPwd.second);
        var editPassword = new EditPassword(userPwd.old, newPassword);

        this.userService.editCurrentPassword(editPassword)
            .then(function (user) {
                $('#pass_form_modal').modal('hide');

                userPwd.reset();

                MessageBoxService.showSuccess(
                    "Opération réussie !",
                    "Le mot de passe a été modifié avec succès !"
                );
            })
            .catch(function (error) {
                $('#pass_form_modal').modal('hide');
                MessageBoxService.showError(
                    "Echec de la modification...",
                    "Le mot de passe n'a pas pu être modifié.");
            });
    }

}