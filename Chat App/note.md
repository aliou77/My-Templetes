## dans chats:
afficher tous les users et le dernier message recu ou envoyer et le nombre de message en attente non lu

## dans contacts:


-------- PLAN -----------
<!-- - creer la db (MCD, MLD) -->
- creer les entity dans la db avec doctrine
- ajout d'un utilisateur dans la db et le configurer dans symfony (pour l'inscription et la connexion)
- mettre en place la deconnexion
- afficher les users dans la parties contact
- ajouter la fonctionnality de la recherche sur les contact avec l'ajax (jquery)
- stocker les messaes envoyer par les users dans la tables messages
- puis afficher les message text envoyer par chaque user dans le chat
- mettre en place les messages audio
# NB: utiliser wavesurfer pour la lecture des audios link: https://wavesurfer-js.org/api/index.html
- l'envoie d'image
- ajouter la fonctinnalite de suppression des messages
# NB: creer un controller pour la homepage et effectuer des requettes an AXAJ pour la recuperation des donnees


-------- A FAIRE INSHALLAH -----------
- ajouter l'heure de l'envoie d'un message en bas du message
- ajouter dans un champs de modification de la description du user dans setting


-------------------- fonctionnalities -----------------------------
audio send, emettre un son lors de l'envoie ou reception du message
image send
capable to download an image or delete it from messages

----------------- En attante -----------------------------
- ajouter envoie audio
- possibilite de supprimer un message dans le chat

--------------------- creation des entitees ---------------------
- users et users_deleted => relation manyTOmany et aussi users_blocked
# NB: lors de l'insertion des donnees dans la tables users_deleted :
les fk(user_deling et user_deleted) ne seront pas lier a la table users, les donnees seront ajouter manuelement
pour que la recuperation des users soit plus facile.

- users et messages => relation manyTOone
# NB: la fk sera dans messages (sender_id)
et recepient_id sera ajouter manuellement






