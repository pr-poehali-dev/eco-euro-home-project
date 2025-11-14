import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProjectsCalculatorSection = () => {
  const [area, setArea] = useState('100');
  const [floors, setFloors] = useState('1');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const calculatePrice = () => {
    const basePrice = 21000;
    const totalArea = parseInt(area) || 100;
    const floorsCount = parseInt(floors) || 1;
    const floorMultiplier = floorsCount === 2 ? 1.2 : 1;
    return Math.round(totalArea * basePrice * floorMultiplier);
  };

  const projects = [
    {
      id: 1,
      name: 'Дом 6х6',
      area: 36,
      floors: 1,
      bedrooms: 1,
      price: 756000,
      pricePerMeter: 21000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/69bf59a6-57b5-43a1-8d61-a6dcbc62b364.jpg'
    },
    {
      id: 2,
      name: 'Дом 6х8',
      area: 48,
      floors: 1,
      bedrooms: 2,
      price: 1008000,
      pricePerMeter: 21000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/e9854526-8fff-4ec8-968c-d152b0611c3c.jpg'
    },
    {
      id: 3,
      name: 'Дом 8х8',
      area: 64,
      floors: 1,
      bedrooms: 2,
      price: 1344000,
      pricePerMeter: 21000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/69bf59a6-57b5-43a1-8d61-a6dcbc62b364.jpg'
    },
    {
      id: 4,
      name: 'Дом 9х9',
      area: 81,
      floors: 1,
      bedrooms: 3,
      price: 1701000,
      pricePerMeter: 21000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/e9854526-8fff-4ec8-968c-d152b0611c3c.jpg'
    },
    {
      id: 5,
      name: 'Дом 10х10',
      area: 100,
      floors: 1,
      bedrooms: 3,
      price: 2100000,
      pricePerMeter: 21000,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/69bf59a6-57b5-43a1-8d61-a6dcbc62b364.jpg'
    },
    {
      id: 6,
      name: 'Дом 10х12',
      area: 120,
      floors: 2,
      bedrooms: 4,
      price: 3024000,
      pricePerMeter: 25200,
      image: 'https://cdn.poehali.dev/projects/eb4c1665-7b7f-4898-b507-20dc97701a96/files/e9854526-8fff-4ec8-968c-d152b0611c3c.jpg'
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

  return (
    <>
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
    </>
  );
};

export default ProjectsCalculatorSection;