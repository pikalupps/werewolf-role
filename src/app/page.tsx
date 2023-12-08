import Roles from "@/components/Roles"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <h1 className="title pb-4 lg:pb-10">WEREWOLF ROLE</h1>
      <Roles />
    </main>
  )
}
