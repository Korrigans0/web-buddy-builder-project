
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

const CampaignPDF = () => {
  const handlePDFUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Créer une URL pour le fichier PDF
      const fileURL = URL.createObjectURL(file);
      // Ouvrir le PDF dans un nouvel onglet
      window.open(fileURL, '_blank');
    }
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Manuel de campagne
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
            <input
              type="file"
              id="pdfUpload"
              accept=".pdf"
              className="hidden"
              onChange={handlePDFUpload}
            />
            <label
              htmlFor="pdfUpload"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <Download className="h-8 w-8 text-gray-400" />
              <p className="text-sm text-gray-600">
                Cliquez pour charger votre PDF de campagne
              </p>
              <p className="text-xs text-gray-500">
                (Le fichier restera sur votre appareil)
              </p>
            </label>
          </div>

          <div className="text-sm text-gray-600">
            <h4 className="font-semibold mb-2">Comment utiliser :</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Cliquez sur la zone ci-dessus pour sélectionner votre PDF</li>
              <li>Le PDF s'ouvrira dans un nouvel onglet pour référence facile</li>
              <li>Gardez l'onglet ouvert pendant que vous utilisez l'assistant</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CampaignPDF
