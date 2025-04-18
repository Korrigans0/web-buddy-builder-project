
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const LocationsTab = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Lieux Principaux</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Phandaline</h4>
              <p className="text-lg mb-2">Village minier sur le Chemin Triboar en bordure de civilisation</p>
              <h5 className="font-semibold mt-4 mb-2">Points d'intérêt :</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>L'Auberge de la Pierre Dressée - Tenue par Toblen Stonehill</li>
                <li>Le Comptoir de Barthen - Magasin général</li>
                <li>L'Échange de Lionshield - Magasin d'équipement</li>
                <li>La Forge d'Edermath - Tenue par Alderleaf</li>
                <li>Le Sanctuaire de la Chance - Temple de Tymora</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Château Cragmaw</h4>
              <p className="mb-2">Forteresse des gobelins où Gundren est retenu prisonnier</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Mine de Phancreux</h4>
              <p className="mb-2">Ancienne mine magique contenant la légendaire Forge des Sorts</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rencontres Aléatoires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Sur la route</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Une charrette abandonnée — traces de sang et piste dans la forêt</li>
                <li>Un mendiant devin, aveugle mais clairvoyant</li>
                <li>1d4 loups affamés</li>
                <li>Patrouille de gobelins endormis près d'un feu</li>
                <li>Caravane de marchands méfiants</li>
                <li>Éclaireur gobelin blessé (peut être interrogé)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg">Forêt ou nature sauvage</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nids d'araignées géantes suspendus dans les arbres</li>
                <li>Vieil autel oublié (religion ou arcane peut le réveiller)</li>
                <li>Dryade fâchée contre les coupes de bois</li>
                <li>Sangliers qui défendent leur territoire</li>
                <li>Fantôme d'un ancien minier — guide ou menace</li>
                <li>Éclairs magiques résiduels — effet magique aléatoire</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Ruines / cavernes / donjons</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Champignons bioluminescents — certains hallucinogènes</li>
                <li>Petit familier abandonné qui cherche un maître</li>
                <li>Tunnel effondré, bruit suspect derrière</li>
                <li>Statut de pierre brisée... avec une main fraîche en dessous</li>
                <li>Étrange rune gravée dans la roche, qui pulse lentement</li>
                <li>Groupe de squelettes jouant aux dés... avec des âmes piégées</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tables pour le MJ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Réactions des PNJ (2d6)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>2 : Hostile (attaque ou fuit)</li>
                <li>3-5 : Méfiant / peu coopératif</li>
                <li>6-8 : Neutre / curieux</li>
                <li>9-11 : Amical / ouvert à la discussion</li>
                <li>12 : Enthousiaste / admiratif</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Objets trouvés sur des ennemis (1d6)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>1 : Bourse vide</li>
                <li>2 : Morceau de carte déchiré</li>
                <li>3 : Dague rouillée</li>
                <li>4 : Potion mineure (1d4+1 PV)</li>
                <li>5 : Porte-bonheur ou grigri tribal</li>
                <li>6 : Lettre codée ou carnet griffonné</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocationsTab
