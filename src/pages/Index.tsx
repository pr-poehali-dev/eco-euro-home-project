import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState('100');
  const [floors, setFloors] = useState('1');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const calculatePrice = () => {
    const basePrice = 25000;
    const totalArea = parseInt(area) || 100;
    const floorsCount = parseInt(floors) || 1;
    const floorMultiplier = floorsCount === 2 ? 1.3 : 1;
    return Math.round(totalArea * basePrice * floorMultiplier);
  };

  const projects = [
    {
      id: 1,
      name: 'Эко-Комфорт 80',
      area: 80,
      floors: 1,
      bedrooms: 2,
      price: 2000000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/69bf59a6-57b5-43a1-8d61-a6dcbc62b364.jpg'
    },
    {
      id: 2,
      name: 'Лесной Уют 120',
      area: 120,
      floors: 2,
      bedrooms: 3,
      price: 3120000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/e9854526-8fff-4ec8-968c-d152b0611c3c.jpg'
    },
    {
      id: 3,
      name: 'Природный Дом 150',
      area: 150,
      floors: 2,
      bedrooms: 4,
      price: 4875000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/69bf59a6-57b5-43a1-8d61-a6dcbc62b364.jpg'
    }
  ];

  const advantages = [
    { icon: 'Zap', title: 'Энергоэффективность', description: 'Снижение расходов на отопление до 60%' },
    { icon: 'Clock', title: 'Быстрое строительство', description: 'Возведение дома за 2-3 месяца' },
    { icon: 'Shield', title: 'Сейсмостойкость', description: 'Выдерживают землетрясения до 7 баллов' },
    { icon: 'Home', title: 'Экологичность', description: 'Безопасные натуральные материалы' },
    { icon: 'Snowflake', title: 'Теплоизоляция', description: 'Сохранение тепла даже в -40°C' },
    { icon: 'Wallet', title: 'Доступная цена', description: 'На 30% дешевле кирпичных домов' }
  ];

  const buildingStages = [
    { step: 1, title: 'Проектирование', duration: '7-10 дней', description: 'Разработка индивидуального или адаптация типового проекта' },
    { step: 2, title: 'Фундамент', duration: '10-14 дней', description: 'Свайно-винтовой или ленточный фундамент' },
    { step: 3, title: 'Монтаж стен', duration: '14-21 день', description: 'Сборка СИП-панелей и возведение коробки дома' },
    { step: 4, title: 'Кровля', duration: '7-10 дней', description: 'Установка стропильной системы и кровельного покрытия' },
    { step: 5, title: 'Отделка', duration: '30-45 дней', description: 'Внутренние и наружные отделочные работы' }
  ];

  const reviews = [
    { name: 'Александр М.', location: 'Московская область', text: 'Построили дом за 3 месяца! Качество на высоте, зимой тепло, летом прохладно. Очень довольны!', rating: 5 },
    { name: 'Елена К.', location: 'Ленинградская область', text: 'Отличная технология! Дом получился теплым и уютным. Рекомендуем ЭкоЕвроДом!', rating: 5 },
    { name: 'Дмитрий П.', location: 'Краснодарский край', text: 'Профессиональная команда, четкие сроки, прозрачные цены. Спасибо за наш семейный дом!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ЭкоЕвроДом</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-accent text-primary-foreground">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Энергоэффективное строительство</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Экологичные дома из СИП-панелей
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстрое строительство современных энергоэффективных домов по канадской технологии. 
                Экономия до 60% на отоплении.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Построенных домов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">12</div>
                  <div className="text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/69bf59a6-57b5-43a1-8d61-a6dcbc62b364.jpg" 
                alt="Дом из СИП-панелей" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Почему СИП-панели?</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Преимущества технологии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современная энергоэффективная технология строительства с доказанной надежностью
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Технология</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Что такое СИП-панель?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                СИП (SIP) — структурная изоляционная панель, состоящая из двух ориентированно-стружечных плит (OSB) 
                и утеплителя из пенополистирола между ними.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary-foreground" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Трехслойная конструкция</div>
                    <div className="text-muted-foreground">OSB плиты толщиной 12 мм + утеплитель 150-200 мм</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary-foreground" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Высокая прочность</div>
                    <div className="text-muted-foreground">Выдерживает нагрузку до 10 тонн на м²</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary-foreground" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Превосходная теплоизоляция</div>
                    <div className="text-muted-foreground">Коэффициент теплопроводности 0.037 Вт/м·K</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/7a27677e-1c2f-4262-af07-e36a30626414.jpg" 
                alt="Структура СИП-панели" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Каталог</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Типовые проекты домов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые решения для вашего комфорта. Возможна адаптация под ваши требования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className={`overflow-hidden cursor-pointer transition-all hover:shadow-2xl ${
                  selectedProject === project.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {project.area} м²
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {project.price.toLocaleString('ru-RU')} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Home" size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.floors} этаж</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Bed" size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.bedrooms} спальни</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    Подробнее о проекте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Онлайн расчет</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">
              Узнайте примерную стоимость вашего дома прямо сейчас
            </p>
          </div>
          <Card className="shadow-2xl border-2">
            <CardContent className="pt-6">
              <Tabs defaultValue="simple" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="simple">Быстрый расчет</TabsTrigger>
                  <TabsTrigger value="detailed">Детальный расчет</TabsTrigger>
                </TabsList>
                <TabsContent value="simple" className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="area" className="text-base">Площадь дома (м²)</Label>
                    <Input 
                      id="area" 
                      type="number" 
                      value={area} 
                      onChange={(e) => setArea(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="floors" className="text-base">Количество этажей</Label>
                    <Input 
                      id="floors" 
                      type="number" 
                      value={floors} 
                      onChange={(e) => setFloors(e.target.value)}
                      min="1"
                      max="2"
                      className="text-lg h-12"
                    />
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/20">
                    <div className="text-center">
                      <div className="text-muted-foreground mb-2">Примерная стоимость:</div>
                      <div className="text-5xl font-bold text-primary mb-4">
                        {calculatePrice().toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">
                        ≈ {Math.round(calculatePrice() / parseInt(area || '100')).toLocaleString('ru-RU')} ₽/м²
                      </div>
                      <Button size="lg" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                        <Icon name="Send" size={20} className="mr-2" />
                        Получить точный расчет
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    * Итоговая стоимость зависит от выбранных материалов и комплектации
                  </div>
                </TabsContent>
                <TabsContent value="detailed">
                  <div className="text-center py-12">
                    <Icon name="FileText" size={64} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Детальный расчет</h3>
                    <p className="text-muted-foreground mb-6">
                      Для точного расчета с учетом всех параметров оставьте заявку
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                      Заказать расчет
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Процесс</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Этапы строительства</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачный процесс от проекта до въезда в дом
            </p>
          </div>
          <div className="space-y-6">
            {buildingStages.map((stage, index) => (
              <div key={stage.step} className="flex gap-6 items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {stage.step}
                  </div>
                </div>
                <Card className="flex-1 border-2 hover:border-primary transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{stage.title}</CardTitle>
                      <Badge variant="outline" className="border-primary text-primary">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {stage.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы владельцев домов из СИП-панелей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.location}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-2">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Badge className="mb-4 bg-primary text-primary-foreground">Контакты</Badge>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Свяжитесь с нами</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                        <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-muted-foreground">info@ekoevrodom.ru</div>
                        <div className="text-muted-foreground">sales@ekoevrodom.ru</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Офис</div>
                        <div className="text-muted-foreground">г. Москва, ул. Строительная, д. 15</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6">Оставьте заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Input id="message" placeholder="Интересует проект..." className="mt-1" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={28} />
                <span className="text-xl font-bold">ЭкоЕвроДом</span>
              </div>
              <p className="text-primary-foreground/80">
                Строительство энергоэффективных домов из СИП-панелей с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Проектирование</li>
                <li>Строительство</li>
                <li>Отделка</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>О компании</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 ЭкоЕвроДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
