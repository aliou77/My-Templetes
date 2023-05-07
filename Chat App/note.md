## dans chats:
afficher tous les users et le dernier message recu ou envoyer et le nombre de message en attente non lu

## dans contacts:


-------- PLAN -----------
- creer la db (MCD, MLD)
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
- ajouter envoie image, et audio
- possibilite de supprimer un message dans le chat
- afficher les infos du destinataire avec un modal lorsqu'on click sur les more vertical
- ajouter le cercle vert dans messages pour montrer que le user est actif


-------------------- fonctionnalities -----------------------------
audio send, emettre un son lors de l'envoie ou reception du message
image send
capable to download an image or delete it from messages
