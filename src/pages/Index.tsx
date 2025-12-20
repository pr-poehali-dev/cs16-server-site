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

  const clans = [
    { id: 1, name: '[ELITE]', tag: 'ELT', members: 28, rating: 8750, leader: 'CyberWolf', logo: '🔥' },
    { id: 2, name: '[PHANTOM]', tag: 'PHT', members: 24, rating: 8120, leader: 'NeonAssassin', logo: '👻' },
    { id: 3, name: '[STORM]', tag: 'STM', members: 31, rating: 7890, leader: 'GlitchMaster', logo: '⚡' },
    { id: 4, name: '[APEX]', tag: 'APX', members: 19, rating: 7340, leader: 'PixelHunter', logo: '🎯' },
    { id: 5, name: '[NEXUS]', tag: 'NXS', members: 22, rating: 6980, leader: 'ByteKiller', logo: '🌀' },
  ];

  const forumTopics = [
    { id: 1, title: 'Лучшие тактики для de_dust2', author: 'TacticalPro', replies: 47, views: 892, category: 'Тактика', date: '2 часа назад', hot: true },
    { id: 2, title: 'Набор в клан [ELITE] - требования', author: 'CyberWolf', replies: 23, views: 456, category: 'Кланы', date: '5 часов назад', hot: true },
    { id: 3, title: 'Гайд по настройке оружия', author: 'WeaponMaster', replies: 89, views: 1523, category: 'Гайды', date: '1 день назад', hot: false },
    { id: 4, title: 'Обсуждение новой карты de_cybercity', author: 'MapExplorer', replies: 34, views: 678, category: 'Обновления', date: '2 дня назад', hot: false },
    { id: 5, title: 'Поиск тиммейтов для турнира', author: 'TeamSeeker', replies: 15, views: 234, category: 'Команды', date: '3 дня назад', hot: false },
  ];

  const inventoryItems = [
    { id: 1, name: 'AK-47 | Неоновый Рейдер', rarity: 'legendary', type: 'Винтовка', wear: 'Немного поношенное', price: '2,450₽', emoji: '🔫', color: 'from-red-500 to-orange-500' },
    { id: 2, name: 'Desert Eagle | Киберпанк', rarity: 'rare', type: 'Пистолет', wear: 'Прямо с завода', price: '890₽', emoji: '🔫', color: 'from-blue-500 to-purple-500' },
    { id: 3, name: 'AWP | Электрошок', rarity: 'mythical', type: 'Снайперская', wear: 'Закалённое', price: '5,200₽', emoji: '🎯', color: 'from-purple-500 to-pink-500' },
    { id: 4, name: 'M4A1-S | Призрак', rarity: 'legendary', type: 'Винтовка', wear: 'Немного поношенное', price: '1,780₽', emoji: '🔫', color: 'from-cyan-500 to-blue-500' },
    { id: 5, name: 'USP-S | Неон', rarity: 'common', type: 'Пистолет', wear: 'После полевых испытаний', price: '340₽', emoji: '🔫', color: 'from-gray-500 to-gray-600' },
    { id: 6, name: 'Нож | Бабочка Градиент', rarity: 'ultra', type: 'Нож', wear: 'Прямо с завода', price: '18,500₽', emoji: '🗡️', color: 'from-yellow-500 to-red-500' },
  ];

  const cases = [
    { id: 1, name: 'Кейс "Киберпанк"', price: '250₽', emoji: '📦', color: 'from-purple-500 to-blue-500' },
    { id: 2, name: 'Кейс "Неоновый город"', price: '180₽', emoji: '📦', color: 'from-pink-500 to-orange-500' },
    { id: 3, name: 'Премиум кейс', price: '450₽', emoji: '🎁', color: 'from-yellow-500 to-red-500' },
  ];

  const getRarityLabel = (rarity: string) => {
    const labels: Record<string, string> = {
      common: 'Армейское',
      rare: 'Редкое',
      mythical: 'Мифическое',
      legendary: 'Легендарное',
      ultra: 'Тайное'
    };
    return labels[rarity] || rarity;
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <nav className="border-b border-primary/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-orbitron font-black neon-glow text-primary">
              CS 1.6 SERVER
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Сервер', 'Рейтинг', 'Новости', 'Инвентарь', 'Клан', 'Форум', 'Контакты'].map((item) => (
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
            <p className="text-xl md:text-2xl text-muted-foreground font-roboto max-w-2xl mx-auto leading-relaxed">
              Окунись в мир жестких боев и эпических противостояний. 
              <span className="text-primary"> Уникальная система рангов</span>, 
              кастомные карты и <span className="text-secondary">активное коммьюнити</span> ждут тебя. 
              Докажи, что ты — лучший!
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

          <TabsContent value="инвентарь" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Package" className="mx-auto mb-2 text-primary" size={32} />
                  <div className="text-2xl font-orbitron font-bold">{inventoryItems.length}</div>
                  <div className="text-sm text-muted-foreground">Предметов</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="DollarSign" className="mx-auto mb-2 text-accent" size={32} />
                  <div className="text-2xl font-orbitron font-bold">29,160₽</div>
                  <div className="text-sm text-muted-foreground">Стоимость</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Star" className="mx-auto mb-2 text-secondary" size={32} />
                  <div className="text-2xl font-orbitron font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Легендарных</div>
                </CardContent>
              </Card>
            </div>

            <Card className="neon-border bg-card/50 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Icon name="Package" className="text-primary" size={24} />
                  ОРУЖИЕ И СКИНЫ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {inventoryItems.map((item) => (
                    <div 
                      key={item.id}
                      className="p-4 rounded-lg border border-primary/30 hover:border-primary/60 transition-all cursor-pointer bg-gradient-to-br from-card/80 to-card/40 backdrop-blur group hover:scale-105"
                    >
                      <div className={`text-5xl mb-3 text-center bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.emoji}
                      </div>
                      <div className="space-y-2">
                        <div className="font-orbitron font-bold text-sm group-hover:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{item.type}</span>
                          <span className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${item.color}`}>
                            {getRarityLabel(item.rarity)}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">{item.wear}</div>
                        <div className="flex items-center justify-between pt-2 border-t border-primary/20">
                          <span className="font-orbitron font-bold text-accent">{item.price}</span>
                          <Button size="sm" variant="outline" className="text-xs">
                            <Icon name="TrendingUp" size={12} className="mr-1" />
                            Продать
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Icon name="Gift" className="text-secondary" size={24} />
                  ОТКРЫТЬ КЕЙС
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {cases.map((caseItem) => (
                    <div 
                      key={caseItem.id}
                      className="p-6 rounded-lg border border-secondary/30 hover:border-secondary/80 transition-all cursor-pointer bg-gradient-to-br from-card/80 to-card/40 backdrop-blur group hover:scale-105"
                    >
                      <div className={`text-6xl mb-4 text-center bg-gradient-to-r ${caseItem.color} bg-clip-text text-transparent animate-pulse`}>
                        {caseItem.emoji}
                      </div>
                      <div className="text-center space-y-3">
                        <div className="font-orbitron font-bold group-hover:text-secondary transition-colors">
                          {caseItem.name}
                        </div>
                        <div className="font-orbitron text-xl font-bold text-accent">{caseItem.price}</div>
                        <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
                          <Icon name="Unlock" className="mr-2" size={16} />
                          Открыть
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="клан" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button className="font-orbitron bg-primary hover:bg-primary/80 flex-1">
                <Icon name="Plus" className="mr-2" size={20} />
                СОЗДАТЬ КЛАН
              </Button>
              <Button variant="outline" className="font-orbitron flex-1">
                <Icon name="Search" className="mr-2" size={20} />
                НАЙТИ КЛАН
              </Button>
            </div>

            <Card className="neon-border bg-card/50 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Icon name="Trophy" className="text-accent" size={24} />
                  ТОП КЛАНОВ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {clans.map((clan) => (
                    <div 
                      key={clan.id}
                      className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all cursor-pointer border border-primary/20 hover:border-primary/50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{clan.logo}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-orbitron font-bold text-lg">{clan.name}</span>
                              <span className="text-xs bg-primary/20 px-2 py-1 rounded text-primary">{clan.tag}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              Лидер: <span className="text-accent">{clan.leader}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-orbitron font-bold text-xl text-primary">{clan.rating.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                            <Icon name="Users" size={12} />
                            {clan.members} игроков
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
                  <div className="text-2xl font-orbitron font-bold">{clans.reduce((sum, c) => sum + c.members, 0)}</div>
                  <div className="text-sm text-muted-foreground">Всего участников</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Shield" className="mx-auto mb-2 text-secondary" size={32} />
                  <div className="text-2xl font-orbitron font-bold">{clans.length}</div>
                  <div className="text-sm text-muted-foreground">Активных кланов</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Swords" className="mx-auto mb-2 text-accent" size={32} />
                  <div className="text-2xl font-orbitron font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Клановых войн</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="форум" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button className="font-orbitron bg-primary hover:bg-primary/80 flex-1">
                <Icon name="Plus" className="mr-2" size={20} />
                СОЗДАТЬ ТЕМУ
              </Button>
              <Button variant="outline" className="font-orbitron flex-1">
                <Icon name="Search" className="mr-2" size={20} />
                ПОИСК
              </Button>
            </div>

            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" size={24} />
                  ОБСУЖДЕНИЯ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {forumTopics.map((topic) => (
                    <div 
                      key={topic.id}
                      className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all cursor-pointer border border-primary/20 hover:border-primary/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {topic.hot && (
                              <Icon name="Flame" className="text-orange-500" size={16} />
                            )}
                            <h3 className="font-orbitron font-bold text-foreground hover:text-primary transition-colors">
                              {topic.title}
                            </h3>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{topic.category}</span>
                            <span className="flex items-center gap-1">
                              <Icon name="User" size={12} />
                              {topic.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="MessageCircle" size={12} />
                              {topic.replies}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Eye" size={12} />
                              {topic.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={12} />
                              {topic.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Icon name="FileText" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-xl font-orbitron font-bold">247</div>
                  <div className="text-xs text-muted-foreground">Тем</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Icon name="MessageCircle" className="mx-auto mb-2 text-secondary" size={24} />
                  <div className="text-xl font-orbitron font-bold">1.2K</div>
                  <div className="text-xs text-muted-foreground">Сообщений</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Icon name="Users" className="mx-auto mb-2 text-accent" size={24} />
                  <div className="text-xl font-orbitron font-bold">156</div>
                  <div className="text-xs text-muted-foreground">Участников</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Icon name="TrendingUp" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-xl font-orbitron font-bold">42</div>
                  <div className="text-xs text-muted-foreground">Онлайн</div>
                </CardContent>
              </Card>
            </div>
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
                  <div className="p-4 bg-muted/20 rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                    <a href="https://t.me/cs16_cyber_arena" target="_blank" rel="noopener noreferrer" className="block">
                      <Icon name="Send" className="mb-2 text-accent" size={24} />
                      <div className="font-orbitron font-bold mb-1">Telegram</div>
                      <div className="text-muted-foreground">@cs16_cyber_arena</div>
                    </a>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                    <a href="https://vk.me/join/V2RbOc0MHktd57U8LdvmSo_bFmHJTp0BSEM=" target="_blank" rel="noopener noreferrer" className="block">
                      <Icon name="Globe" className="mb-2 text-primary" size={24} />
                      <div className="font-orbitron font-bold mb-1">VK Группа</div>
                      <div className="text-muted-foreground">vk.com/cs16cyber</div>
                    </a>
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