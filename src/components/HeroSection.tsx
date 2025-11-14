import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
