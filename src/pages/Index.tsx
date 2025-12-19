import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const topPlayers = [
    { rank: 1, name: 'CyberWolf', kills: 15420, deaths: 3201, kd: 4.82, level: 89 },
    { rank: 2, name: 'NeonAssassin', kills: 14890, deaths: 3456, kd: 4.31, level: 85 },
    { rank: 3, name: 'GlitchMaster', kills: 13750, deaths: 3678, kd: 3.74, level: 82 },
    { rank: 4, name: 'PixelHunter', kills: 12340, deaths: 3890, kd: 3.17, level: 78 },
    { rank: 5, name: 'ByteKiller', kills: 11230, deaths: 4012, kd: 2.80, level: 75 },
  ];

  const news = [
    { 
      id: 1, 
      title: 'Турнир "Киберспорт 2025" — Регистрация открыта!', 
      date: '15.12.2024',
      content: 'Призовой фонд 50,000₽. Формат 5v5. Регистрация команд до 25 декабря.'
    },
    { 
      id: 2, 
      title: 'Новая карта de_cybercity добавлена на сервер', 
      date: '12.12.2024',
      content: 'Футуристическая карта с неоновыми огнями и вертикальным геймплеем.'
    },
    { 
      id: 3, 
      title: 'Обновление рейтинговой системы', 
      date: '08.12.2024',
      content: 'Новый алгоритм расчета KD и введение системы сезонных рангов.'
    },
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <nav className="border-b border-primary/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-orbitron font-black neon-glow text-primary">
              CS 1.6 SERVER
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Сервер', 'Рейтинг', 'Новости', 'Клан', 'Форум', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-roboto uppercase text-sm tracking-wider hover:neon-glow"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="outline" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <img 
              src="https://cdn.poehali.dev/files/1680712027796.jpg" 
              alt="Eclipse" 
              className="w-96 h-96 object-contain"
            />
          </div>
          
          <div className="relative z-10 text-center space-y-8 py-20">
            <h2 className="text-6xl md:text-8xl font-orbitron font-black neon-glow animate-slide-up">
              CYBER<span className="text-secondary">ARENA</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-roboto max-w-2xl mx-auto">
              Легендарный сервер Counter-Strike 1.6 с уникальной системой рангов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Card className="neon-border bg-card/50 backdrop-blur-sm animate-pulse-glow">
                <CardContent className="p-6">
                  <div className="text-4xl font-orbitron font-bold text-primary">26.14.27.135:27015</div>
                  <div className="text-sm text-muted-foreground mt-2">IP АДРЕС СЕРВЕРА</div>
                </CardContent>
              </Card>
              
              <div className="flex gap-4">
                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-orbitron font-bold text-secondary">24/32</div>
                    <div className="text-xs text-muted-foreground">ИГРОКОВ</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-orbitron font-bold text-primary">de_dust2</div>
                    <div className="text-xs text-muted-foreground">КАРТА</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center mt-8">
              <Button size="lg" className="font-orbitron bg-primary hover:bg-primary/80 neon-border">
                <Icon name="Download" className="mr-2" size={20} />
                СКАЧАТЬ КЛИЕНТ
              </Button>
              <Button size="lg" variant="outline" className="font-orbitron border-primary text-primary hover:bg-primary/10">
                <Icon name="Users" className="mr-2" size={20} />
                ПРИСОЕДИНИТЬСЯ
              </Button>
            </div>
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="home">Главная</TabsTrigger>
            <TabsTrigger value="сервер">Сервер</TabsTrigger>
            <TabsTrigger value="рейтинг">Рейтинг</TabsTrigger>
            <TabsTrigger value="новости">Новости</TabsTrigger>
            <TabsTrigger value="клан">Клан</TabsTrigger>
            <TabsTrigger value="форум">Форум</TabsTrigger>
            <TabsTrigger value="контакты">Контакты</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="Trophy" className="text-secondary" />
                    ТОП-3 ИГРОКА НЕДЕЛИ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPlayers.slice(0, 3).map((player) => (
                    <div key={player.rank} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl font-orbitron font-bold ${
                          player.rank === 1 ? 'text-secondary' : 
                          player.rank === 2 ? 'text-primary' : 
                          'text-accent'
                        }`}>
                          #{player.rank}
                        </div>
                        <div>
                          <div className="font-orbitron font-bold">{player.name}</div>
                          <div className="text-sm text-muted-foreground">Level {player.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-orbitron text-primary font-bold">{player.kd}</div>
                        <div className="text-xs text-muted-foreground">K/D</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="Newspaper" className="text-primary" />
                    ПОСЛЕДНИЕ НОВОСТИ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {news.slice(0, 2).map((item) => (
                    <div key={item.id} className="p-4 bg-muted/20 rounded-lg border border-primary/20 hover:border-primary/50 transition-all cursor-pointer">
                      <div className="text-xs text-secondary mb-2">{item.date}</div>
                      <h3 className="font-orbitron font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="сервер" className="space-y-6">
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron">ИНФОРМАЦИЯ О СЕРВЕРЕ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/20 rounded-lg text-center">
                    <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
                    <div className="text-2xl font-orbitron font-bold">32</div>
                    <div className="text-sm text-muted-foreground">Слоты</div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg text-center">
                    <Icon name="Map" className="mx-auto mb-2 text-secondary" size={32} />
                    <div className="text-2xl font-orbitron font-bold">15</div>
                    <div className="text-sm text-muted-foreground">Карт</div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg text-center">
                    <Icon name="Zap" className="mx-auto mb-2 text-accent" size={32} />
                    <div className="text-2xl font-orbitron font-bold">128</div>
                    <div className="text-sm text-muted-foreground">Tick Rate</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-orbitron font-bold mb-4">ОСОБЕННОСТИ СЕРВЕРА</h3>
                  <ul className="space-y-2">
                    {[
                      'Античит VAC + Custom Protection',
                      'Рейтинговая система с сезонами',
                      'Уникальная система рангов',
                      'Еженедельные турниры',
                      'VIP привилегии',
                      'Администрация 24/7'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="рейтинг" className="space-y-6">
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron">ТАБЛИЦА ЛИДЕРОВ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="text-left p-3 font-orbitron">РАНГ</th>
                        <th className="text-left p-3 font-orbitron">ИГРОК</th>
                        <th className="text-center p-3 font-orbitron">УРОВЕНЬ</th>
                        <th className="text-center p-3 font-orbitron">УБИЙСТВА</th>
                        <th className="text-center p-3 font-orbitron">СМЕРТИ</th>
                        <th className="text-center p-3 font-orbitron">K/D</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPlayers.map((player) => (
                        <tr key={player.rank} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                          <td className="p-3">
                            <div className={`text-xl font-orbitron font-bold ${
                              player.rank === 1 ? 'text-secondary' : 
                              player.rank === 2 ? 'text-primary' : 
                              player.rank === 3 ? 'text-accent' : 'text-muted-foreground'
                            }`}>
                              #{player.rank}
                            </div>
                          </td>
                          <td className="p-3 font-orbitron font-bold">{player.name}</td>
                          <td className="p-3 text-center text-primary font-bold">{player.level}</td>
                          <td className="p-3 text-center">{player.kills.toLocaleString()}</td>
                          <td className="p-3 text-center">{player.deaths.toLocaleString()}</td>
                          <td className="p-3 text-center font-orbitron font-bold text-secondary">{player.kd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="новости" className="space-y-6">
            {news.map((item) => (
              <Card key={item.id} className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron">{item.title}</CardTitle>
                    <span className="text-sm text-secondary font-roboto">{item.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="клан" className="space-y-6">
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron">КЛАНОВАЯ СИСТЕМА</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Создавайте кланы, набирайте участников и сражайтесь за первое место в клановом рейтинге!
                </p>
                <Button className="font-orbitron bg-primary hover:bg-primary/80">
                  <Icon name="Users" className="mr-2" size={20} />
                  СОЗДАТЬ КЛАН
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="форум" className="space-y-6">
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron">ФОРУМ СООБЩЕСТВА</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Общайтесь с другими игроками, делитесь тактиками и обсуждайте последние обновления.
                </p>
                <Button className="font-orbitron bg-primary hover:bg-primary/80">
                  <Icon name="MessageSquare" className="mr-2" size={20} />
                  ПЕРЕЙТИ НА ФОРУМ
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="контакты" className="space-y-6">
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron">КОНТАКТЫ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Icon name="Mail" className="mb-2 text-primary" size={24} />
                    <div className="font-orbitron font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">admin@cs16server.ru</div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Icon name="MessageCircle" className="mb-2 text-secondary" size={24} />
                    <div className="font-orbitron font-bold mb-1">Discord</div>
                    <div className="text-muted-foreground">discord.gg/cs16cyber</div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Icon name="Send" className="mb-2 text-accent" size={24} />
                    <div className="font-orbitron font-bold mb-1">Telegram</div>
                    <div className="text-muted-foreground">@cs16_cyber_arena</div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Icon name="Globe" className="mb-2 text-primary" size={24} />
                    <div className="font-orbitron font-bold mb-1">VK Группа</div>
                    <div className="text-muted-foreground">vk.com/cs16cyber</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-primary/30 mt-16 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-roboto">
            © 2024 CS 1.6 CyberArena. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Counter-Strike 1.6 является собственностью Valve Corporation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;