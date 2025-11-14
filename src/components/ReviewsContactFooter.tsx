import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ReviewsContactFooter = () => {
  const reviews = [
    { name: 'Александр М.', location: 'Московская область', text: 'Построили дом за 3 месяца! Качество на высоте, зимой тепло, летом прохладно. Очень довольны!', rating: 5 },
    { name: 'Елена К.', location: 'Ленинградская область', text: 'Отличная технология! Дом получился теплым и уютным. Рекомендуем ЭкоЕвроДом!', rating: 5 },
    { name: 'Дмитрий П.', location: 'Краснодарский край', text: 'Профессиональная команда, четкие сроки, прозрачные цены. Спасибо за наш семейный дом!', rating: 5 }
  ];

  return (
    <>
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
    </>
  );
};

export default ReviewsContactFooter;
