
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const MonstersTab = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Ennemis Fréquents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Gobelins</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 7</span>
                <span>Classe d'armure : 15</span>
                <span>Attaque : +4</span>
                <span>Dégâts : 1d6+2</span>
              </p>
              <p className="mt-2">Capacité spéciale : Action rusée (se désengager en action bonus)</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Bugbears</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 27</span>
                <span>Classe d'armure : 16</span>
                <span>Attaque : +4</span>
                <span>Dégâts : 2d8+2</span>
              </p>
              <p className="mt-2">Capacité spéciale : Attaque surprise (2d6 dégâts supplémentaires)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Boss et Ennemis Spéciaux</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Le Spectre Vert (Nezznar)</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 71</span>
                <span>Classe d'armure : 16</span>
                <span>Sorts : 4e niveau</span>
                <span>Résistances : Magiques</span>
              </p>
              <p className="mt-2">Sorts principaux : Toile d'araignée, Suggestion, Éclair</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Mormesk le Spectre</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 45</span>
                <span>Classe d'armure : 13</span>
                <span>Drain de vie : 3d6</span>
                <span>Type : Non-mort</span>
              </p>
              <p className="mt-2">Résistances : Armes non magiques</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MonstersTab
