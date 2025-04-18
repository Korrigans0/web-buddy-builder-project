
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const MonstersTab = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Bestiaire Principal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Zombies et Squelettes</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 22 (zombie)</span>
                <span>Points de vie : 13 (squelette)</span>
                <span>Classe d'armure : 8 (zombie)</span>
                <span>Classe d'armure : 13 (squelette)</span>
              </p>
              <p className="mt-2">Particularités : Résistants, obéissent à des maîtres nécromanciens</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Spectateur (gardien de la Forge des Sorts)</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 39 (6d10+6)</span>
                <span>Classe d'armure : 14</span>
                <span>Perception : +5</span>
              </p>
              <p className="mt-2">Particularités : Peut se téléporter, immunisé contre charme/peur</p>
              <p>Attaques : Rayons magiques aléatoires (charme, peur, foudre, ralentissement)</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Araignée Noire (Nezznar)</h4>
              <p className="grid grid-cols-2 gap-2 text-sm mt-2">
                <span>Points de vie : 33 (6d8+6)</span>
                <span>Classe d'armure : 13</span>
                <span>Arcanes : +6</span>
                <span>Discrétion : +5</span>
              </p>
              <p className="mt-2">Particularités : Peut invoquer des toiles magiques</p>
              <p>Attaques : Rayons de l'ombre, Bâton magique (1d8 nécrotique)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compagnons & Créatures Spéciales</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h4 className="font-semibold text-lg">Blib, le Mini-Ogre Flottant</h4>
            <p className="grid grid-cols-2 gap-2 text-sm mt-2">
              <span>Points de vie : 7 (2d6)</span>
              <span>Classe d'armure : 12</span>
              <span>Déplacement : 6 m (vol)</span>
              <span>Taille : Très Petit</span>
            </p>
            <div className="mt-2">
              <h5 className="font-medium">Compétences :</h5>
              <ul className="list-disc pl-6">
                <li>Acrobatie -1 (très maladroit)</li>
                <li>Persuasion +4 (trop mignon pour être ignoré)</li>
                <li>Intuition +2 (ressent bien les humeurs)</li>
              </ul>
            </div>
            <div className="mt-2">
              <h5 className="font-medium">Pouvoirs Spéciaux :</h5>
              <ul className="list-disc pl-6">
                <li>Gros Regard Suppliant (1x repos long)</li>
                <li>Doudou Volant (action bonus)</li>
                <li>Accident Spectaculaire (1x repos court)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MonstersTab
