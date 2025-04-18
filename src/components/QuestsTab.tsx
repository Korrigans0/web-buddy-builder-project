
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
          <CardTitle>Quêtes Annexes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Le Silence d'Agatha</h4>
              <p className="italic mb-2">Donnée par : Sœur Garaele</p>
              <p>Niveau conseillé : 2-3</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trouver la banshee Agatha et gagner sa confiance</li>
                <li>Défi : Interaction sociale + rôleplay</li>
                <li>Récompense : Potions, infos secrètes sur Iarno, objet magique mineur</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">La Main qui Tisse</h4>
              <p className="italic mb-2">Donnée par : Tilda l'herboriste</p>
              <p>Niveau conseillé : 2+</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Explorer les serres infestées de Tresendar Manor</li>
                <li>Défi : Exploration + combat contre araignées</li>
                <li>Récompense : Anneau de protection + ingrédient rare</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Le Poids du Passé</h4>
              <p className="italic mb-2">Donnée par : Daran Edermath</p>
              <p>Niveau conseillé : 3</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retrouver un ancien compagnon d'armes disparu</li>
                <li>Défi : Combat + énigme dans un tombeau effondré</li>
                <li>Récompense : Arme magique familiale</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Le Sang des Bois</h4>
              <p className="italic mb-2">Donnée par : Villageois inquiets</p>
              <p>Niveau conseillé : 1-2</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enquêter sur des hurlements près du vieux puits</li>
                <li>Défi : Enquête + traque + choix moral</li>
                <li>Récompense : Réputation + potion rare + bénédiction temporaire</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">L'Or de Grol</h4>
              <p className="italic mb-2">Donnée par : Lettre trouvée sur un gobelin</p>
              <p>Niveau conseillé : 3+</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trouver le trésor personnel du Roi Grol</li>
                <li>Défi : Exploration d'un mini-donjon + gobelins</li>
                <li>Récompense : Or, gemmes, parchemins magiques</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuestsTab
