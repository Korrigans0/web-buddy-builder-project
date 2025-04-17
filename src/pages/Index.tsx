
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f2e9d8] bg-pattern">
      {/* Header */}
      <header className="bg-[#7c2020] text-[#e8d8c0] p-6 text-center rounded-lg shadow-lg m-4">
        <h1 className="text-4xl font-bold mb-2 text-shadow">La Mine oubliée de Phandelver</h1>
        <p className="text-xl">Assistant de maître du jeu</p>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto p-4">
        <Tabs defaultValue="carte" className="w-full">
          <TabsList className="bg-[#50331f] text-[#e8d8c0] w-full flex flex-wrap h-auto gap-1 p-1">
            <TabsTrigger value="carte" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Carte
            </TabsTrigger>
            <TabsTrigger value="lieux" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Lieux
            </TabsTrigger>
            <TabsTrigger value="pnj" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              PNJ
            </TabsTrigger>
            <TabsTrigger value="quetes" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Quêtes
            </TabsTrigger>
            <TabsTrigger value="monstres" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Monstres
            </TabsTrigger>
            <TabsTrigger value="des" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Dés
            </TabsTrigger>
            <TabsTrigger value="combat" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Combat
            </TabsTrigger>
            <TabsTrigger value="notes" className="data-[state=active]:bg-[#8c6142] hover:bg-[#6d4a34]">
              Notes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="carte" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Carte interactive</CardTitle>
              </CardHeader>
            </Card>
          </TabsContent>

          {/* Placeholder tabs content */}
          <TabsContent value="lieux">Contenu des lieux</TabsContent>
          <TabsContent value="pnj">Contenu des PNJ</TabsContent>
          <TabsContent value="quetes">Contenu des quêtes</TabsContent>
          <TabsContent value="monstres">Contenu des monstres</TabsContent>
          <TabsContent value="des">Contenu des dés</TabsContent>
          <TabsContent value="combat">Contenu du combat</TabsContent>
          <TabsContent value="notes">Contenu des notes</TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default Index
