
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const NPCTab = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Personnages Alliés</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Gundren Rockseeker</h4>
              <p className="italic mb-2">Nain prospecteur</p>
              <p>A redécouvert la Mine de Vague Écumante. Kidnappé par les gobelins du clan Cragmaw au début de l'aventure.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Sildar Hallwinter</h4>
              <p className="italic mb-2">Guerrier humain de l'Alliance des Seigneurs</p>
              <p>Accompagnait Gundren lors de son enlèvement. Peut être sauvé à la Grotte des Échos.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Sœur Garaele</h4>
              <p className="italic mb-2">Prêtresse elfe de Tymora</p>
              <p>Dirige le Sanctuaire de la Chance à Phandalin. Membre de l'Alliance Emeraude.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Antagonistes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Le Spectre Vert (Nezznar)</h4>
              <p className="italic mb-2">Drow mage</p>
              <p>Principal antagoniste, cherche à s'emparer de la Forge des Sorts dans la Mine de Vague Écumante.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Glasstaff (Iarno Albrek)</h4>
              <p className="italic mb-2">Mage humain corrompu</p>
              <p>Chef des Redbrands, ancien agent de l'Alliance des Seigneurs passé du côté du crime.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Roi Grol</h4>
              <p className="italic mb-2">Chef bugbear du clan Cragmaw</p>
              <p>Dirige le château Cragmaw et maintient Gundren prisonnier.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NPCTab
