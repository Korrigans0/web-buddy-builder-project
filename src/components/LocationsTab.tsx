
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
                <li>Une charrette abandonnée — traces de sang</li>
                <li>Un mendiant devin, aveugle mais clairvoyant</li>
                <li>1d4 loups affamés</li>
                <li>Patrouille de gobelins endormis</li>
                <li>Caravane de marchands méfiants</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Forêt ou nature sauvage</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nids d'araignées géantes dans les arbres</li>
                <li>Vieil autel oublié</li>
                <li>Dryade fâchée contre les coupes de bois</li>
                <li>Fantôme d'un ancien minier</li>
                <li>Éclairs magiques résiduels</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocationsTab
