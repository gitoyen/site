[[!meta title="Services de Gitoyen" ]]

Gitoyen fournit plusieurs services à ses membres et ses clients.

# Description des services

## Transit Internet

Gitoyen est un opérateur Internet disposant de ses propres liens de
communication avec le reste d'Internet. Dans ce cadre nous sommes en mesure de
fournir une vue complète d'Internet (du **Transit**)  à nos membres ou nos
clients.

## Hébergement d'équipement

Gitoyen dispose de deux points de présence basés à Paris avec notre propre
espace d'hébergement d'équipement. L'un à Téléhouse - Paris Voltaire et l'autre
à Paris Bourse.

Nous sommes en mesure de proposer de l'**hébergement d'équipement** à nos
membres et nos clients.

## LIR / Obtention de ressources Internet

Gitoyen est un *registre local d'Internet* (LIR). Cela lui donne la possibilité
d'assigner des ressources : blocs d'adresses IP ou numéros d'AS.

Il y a deux types de ressources facturées :

* Celles nécessitant un contrat spécifique avec le LIR pour laquelle le RIPE
  impose une facturation spécifique (les ressources **Provider Independant
  (PI)**) ;

* Les autres ne nécessitant pas de contrat spécifique (**Provider Aggregate
  (PA)**, **Autonomous System (AS)**.

## Commutation et Routage

Nous proposons à nos membres la possibilité d'utiliser :

* **l'infrastructure de commutation** de Gitoyen, c'est à dire l'utilisation de
  ports réseaux de nos switchs pour leurs besoins propres ;

* **l'infrastructure de routage** de Gitoyen, c'est à dire la possibilité
  d'utiliser les routeurs et l'AS de Gitoyen pour annoncer leurs propres
  réseaux. L'infrastructure de routage inclut la commutation.

# Les tarifs

TODO: ajouter le pdf ou bien faire un tableau html


## Quelques cas d'usage

### Ressources Internet pour monter un petit FAI ou un hébergeur de services

Pour une petite structure nécessitant du réseau, il vous sera nécessaire
d'avoir vos propres blocs d'adresses. Pour cela il vous suffit d'adhérer et de
prendre une ressource pour un bloc d'adresses IPv4, une autre pour un bloc
d'adresses IPv6 et éventuellement une dernière pour avoir un AS, selon les
besoins.

### Livraison réseau via Gitoyen

Pour avoir une livraison chez Gitoyen (par exemple en amenant un câble, ou en
utilisant une machine virtuelle d'infrastructure chez Gitoyen), cela signifie
payer le transit et l'infrastructure de commutation.

**Remarque :** la machine virtuelle d'infrastructure est à la discrétion du
membre mais n'a pour but que d'établir un lien Ethernet « virtuel » entre
Gitoyen et le réseau du membre (via openvpn, gre, ipsec, etc.).

### Annoncer son réseau avec les routeurs de Gitoyen

Il est aussi possible d'utiliser directement les routeurs et l'AS de Gitoyen
pour annoncer son réseau, dans ce cas il s'agit du tarif infrastructure de
routage (qui comprend l'infrastructure de commutation).

Pour un exemple chiffré (par rapport à Gitoyen), pour une petite asso (moins de
20 000 € de CA) dans un cas type, sans parler de l'adhésion cela donne :


