const returnToMainPage = document.querySelector('#logo')
returnToMainPage.addEventListener('click', ()=>{
    window.location.pathname = './index.html'
})



const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title:
     "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date:  new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 74,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    },
  ];

  const eventsContainer = document.getElementById('events-container');
// Получаем ссылку на все селекты
const typeSelect = document.getElementById('type');
const distanceSelect = document.getElementById('distance');
const categorySelect = document.getElementById('category');
// Функция для создания карточки
function createEventCard(event) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Форматирование даты
  const formattedDate = event.date.toLocaleString('en-US', {
    weekday: 'short',  
    year: 'numeric',   
    month: 'short',    
    day: 'numeric',    
    hour: '2-digit',   
    minute: '2-digit', 
    hour12: true,      
    timeZone: 'UTC'    
  });

  card.innerHTML = `
  <div class="cards">
    <img src="${event.image}" alt="${event.title}">
    <div class="card-body">
      <p class="date">${formattedDate}</p>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p class="category">${event.category}</p>
      <p class="distance">${event.distance} km away</p>
      <p class="type">${event.type}
    </div>
  `;

  return card;
}
// Добавление всех карточек в контейнер
eventsStore.forEach(event => {
    const card = createEventCard(event);
    eventsContainer.appendChild(card);
  });




// Функция для фильтрации событий по типу
function filterEventsByType() {
    const type = typeSelect.value; // Получаем выбранный тип
  
    // Фильтруем события по типу
    const filteredEvents = eventsStore.filter(event => {
      return type === 'any' || event.type === type;
    });
  
    // Перерисовываем карточки событий
    displayEvents(filteredEvents);
  }
  // Функция для отображения событий
function displayEvents(events) {
    // Очищаем контейнер перед обновлением
    eventsContainer.innerHTML = '';
  
    // Создаем карточки для каждого события
    events.forEach(event => {
      const card = createEventCard(event);
      eventsContainer.appendChild(card);
    });
  }
// Добавляем обработчик события на селектор типа
typeSelect.addEventListener('change', filterEventsByType);

