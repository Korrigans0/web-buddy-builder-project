
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const QuestsTab = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Quêtes Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">La Mine Perdue</h4>
              <p className="italic mb-2">Donnée par : Gundren Rockseeker</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retrouver et explorer la Mine de Vague Écumante</li>
                <li>Vaincre le Spectre Vert</li>
                <li>Récompense : Part dans l'exploitation de la mine</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Sauver Gundren</h4>
              <p className="italic mb-2">Donnée par : Sildar Hallwinter</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Localiser le château Cragmaw</li>
                <li>Sauver Gundren des gobelins</li>
                <li>Récompense : 500 pièces d'or</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quêtes Secondaires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Les Redbrands</h4>
              <p className="italic mb-2">Donnée par : Les habitants de Phandalin</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Éliminer la menace des Redbrands</li>
                <li>Confronter leur chef, Glasstaff</li>
                <li>Récompense : 200 pièces d'or</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">L'Agitation à Wyvern Tor</h4>
              <p className="italic mb-2">Donnée par : Harbin Wester</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Éliminer les orcs près de Wyvern Tor</li>
                <li>Récompense : 100 pièces d'or</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuestsTab
