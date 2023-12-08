import React from 'react'

const Roles = () => {
  class Role {
    name: string;
    desc: string;
    side: string;
    img: string;

    constructor(name: string, desc: string, side: string, img: string) {
      this.name = name;
      this.desc = desc;
      this.side = side;
      this.img = img;
    }
  }

  const werewolf = new Role('Werewolf', 'Pada malam hari werewolf dapat memilih satu orang untuk di makan. Werewolf dapat mengetahui siapa temannya.', 'Bad Side', '/werewolf.png');
  const villager = new Role('Villager', 'Sebagai warga biasa, tidak memiliki skill apapun.', 'Good Side', '/villager.png');
  const seer = new Role('Seer', 'Pada malam hari dapat memilih satu orang untuk dicek (seer akan mengetahui side player yang dicek).', 'Good Side', '/seer.png');
  const doctor = new Role('Doctor', 'Pada malam hari dapat memilih satu orang yang akan dilindungi, jika player tersebut diserang maka player tersebut tidak mati. Doctor tidak bisa memilih dirinya sendiri untuk dilindungi.', 'Good Side', '/doctor.png');
  const bodyguard = new Role('Bodyguard', 'Pada malam hari dapat memilih satu orang yang akan dilindungi, jika player tersebut diserang maka player tersebut tidak mati dan Bodyguard akan terluka. Bodyguard secara otomatis melindungi dirinya sendiri. Jika Bodyguard yang terluka diserang lagi maka akan mati.', 'Good Side', '/bodyguard.png');
  const cupid = new Role('Cupid', 'Di malam pertama dapat memilih 2 player yang akan dipasangkan. 2 player tersebut akan sehidup semati.', 'Good Side', '/cupid.png');
  const flowerchild = new Role('Flowerchild', 'Jika Flowerchild mendapat vote terbanyak maka ia tidak akan mati dan akan mereveal rolenya ke para penduduk.', 'Good Side', '/flower.png');
  const theFool = new Role('The Fool', 'The Fool akan menang hanya jika ia mendapat vote terbanyak.', 'Neutral Side', '/jester.png');
  const serialKiller = new Role('Serial Killer', 'Pada malam hari Serial Killer dapat memilih satu orang untuk dibunuh. Serial Killer tidak dapat dibunuh oleh Werewolf. Serial Killer akan menang hanya jika ia satu-satunya orang yang selamat.', 'Neutral Side', '/serial-killer.png');

  const roles: Role[] = [werewolf, villager, seer, doctor, bodyguard, cupid, flowerchild, theFool, serialKiller];

  return (
    <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6'>
      {roles.map((role, index) => (
        <div key={index} className="card w-40 lg:w-64 bg-base-100 shadow-xl bg-[#1F2833] p-2 lg:p-4 rounded-xl bg-opacity-50">
          <figure className={
            role.side == 'Bad Side' ? 'card-image card-bad' :
              role.side == 'Good Side' ? 'card-image card-good' :
                'card-image card-neutral'
          }>
            <img src={role.img} alt={role.name} />
          </figure>
          <div className="card-body items-center text-center flex flex-col gap-1 pt-3">
            <h2 className="card-title">{role.name}</h2>
            <p className="card-desc">{role.desc}</p>
            <p className={
              role.side == 'Bad Side' ? 'card-side card-bad' :
                role.side == 'Good Side' ? 'card-side card-good' :
                  'card-side card-neutral'
            }>{role.side}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Roles