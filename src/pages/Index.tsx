import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Современный веб-дизайн',
      image: 'https://cdn.poehali.dev/projects/78bc9acd-e85e-4cfa-ad44-11efc9bd8c38/files/e6049190-738a-4196-9bbe-f150133352dd.jpg',
      category: 'UI/UX'
    },
    {
      id: 2,
      title: 'Брендинг и айдентика',
      image: 'https://cdn.poehali.dev/projects/78bc9acd-e85e-4cfa-ad44-11efc9bd8c38/files/ab3f1ce0-821a-4ff1-aba3-1a6c1a820198.jpg',
      category: 'Branding'
    },
    {
      id: 3,
      title: 'Минималистичная графика',
      image: 'https://cdn.poehali.dev/projects/78bc9acd-e85e-4cfa-ad44-11efc9bd8c38/files/707bbc45-abe0-4cdb-9e17-4ced96ca714b.jpg',
      category: 'Graphic Design'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border animate-slide-down">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Portfolio</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
                Обо мне
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-accent transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Дизайнер
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Создаю минималистичные и функциональные решения для цифровых продуктов
          </p>
          <Button size="lg" onClick={() => scrollToSection('portfolio')} className="group">
            Смотреть работы
            <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold mb-6">Обо мне</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Я начинающий дизайнер с фокусом на создании чистых и интуитивных интерфейсов. 
                Верю в силу минимализма и функциональности.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Каждый проект для меня — это возможность создать что-то уникальное и полезное. 
                Работаю с вниманием к деталям и современными инструментами дизайна.
              </p>
              <div className="flex gap-4">
                <Card className="p-4 flex-1 hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Года опыта</div>
                </Card>
                <Card className="p-4 flex-1 hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </Card>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/e27be6bc-dc64-4a2d-9345-21df34e3aa6e.jpeg" 
                alt="Портфолио"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Портфолио</h3>
            <p className="text-lg text-muted-foreground">
              Подборка моих последних работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm mb-2 opacity-80">{item.category}</div>
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Свяжитесь со мной для обсуждения проекта
            </p>
          </div>
          <Card className="p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Отправить сообщение
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Portfolio</h4>
              <p className="text-muted-foreground">
                Создаю минималистичные и функциональные дизайн-решения
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <a href="tel:+79991234567" className="flex items-center justify-end gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </a>
                <a href="mailto:designer@example.com" className="flex items-center justify-end gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Mail" size={16} />
                  <span>designer@example.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;