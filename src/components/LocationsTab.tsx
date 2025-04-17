
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const LocationsTab = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Phandalin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-2">Village minier situé sur la Route de la Tribourdaine</p>
          <h4 className="font-semibold mt-4 mb-2">Points d'intérêt :</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>L'Auberge de la Pierre Dressée - Tenue par Toblen Stonehill</li>
            <li>Le Comptoir de Barthen - Magasin général</li>
            <li>L'Échange de Lionshield - Magasin d'équipement</li>
            <li>La Forge d'Edermath - Tenue par Alderleaf</li>
            <li>Le Sanctuaire de la Chance - Temple de Tymora</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Le Château Cragmaw</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-2">Ancienne forteresse en ruines servant de repaire aux gobelins</p>
          <h4 className="font-semibold mt-4 mb-2">Détails importants :</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Situé dans la forêt de Neverwinter</li>
            <li>Occupé par le clan Cragmaw et leur chef, le Roi Grol</li>
            <li>Lieu de détention de Gundren Rockseeker</li>
            <li>Gardé par des gobelins, des hobgobelins et des bugbears</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>La Mine de Vague Écumante</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-2">Ancienne mine naine légendaire, objectif final de l'aventure</p>
          <h4 className="font-semibold mt-4 mb-2">Points clés :</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contient la Forge des Sorts, un atelier magique ancien</li>
            <li>Occupée par le Spectre Vert (Nezznar) et ses serviteurs</li>
            <li>Riche en filons de minerai magique</li>
            <li>Plusieurs niveaux de galeries et de cavernes</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocationsTab
