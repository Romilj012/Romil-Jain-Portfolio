import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Master of Science in Computer Science</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Syracuse University, Syracuse, New York</p>
            <p>Graduation: May 2024</p>
            <p>GPA: 3.7</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Technology in Computer Science</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, India</p>
            <p>Graduation: July 2020</p>
            <p>GPA: 3.5</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

