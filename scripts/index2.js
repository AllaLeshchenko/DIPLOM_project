// Переход со второй страници на первую
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
  ]

// Создаем переменные для фильтрации по категориям
const eventsContainer = document.getElementById('events-container')
const typeSelect = document.getElementById('type')
const distanceSelect = document.getElementById('distance')
const categorySelect = document.getElementById('category')

// Функция для создания карточки
function createEventCard(event) {
  const card = document.createElement('div') //создаем контецнер для карточек
  card.classList.add('card') //присваиваем ему класс 

  // Создаем переменную для отображения даты в карточке
  const formattedDate = event.date.toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  })
  
// Создаем саму карточку с такой разметкой
  card.innerHTML = `
    <div class="cards">
      <img src="${event.image}" alt="${event.title}">
      <div class="card-body">
        <p class="date">${formattedDate}</p>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p class="category">${event.category}</p>
        <p class="distance">${event.distance} km away</p>
        <p class="type">${event.type}</p>
      </div>
    </div>
  `
  return card
}

// Создаем функцию для отображения событий 
function displayEvents(events) {
  eventsContainer.innerHTML = ''
  events.forEach(event => {
    const card = createEventCard(event)
    eventsContainer.appendChild(card)
  })
}
// Cоздаем функцию для фильтрации по типам
function filterEvents() {
  const type = typeSelect.value
  const distance = distanceSelect.value
  const category = categorySelect.value

  const filteredEvents = eventsStore.filter(event => {
    // Фильтрация по типу
    if (type !== 'all' && event.type !== type) {
      return false
    }

   //  Фильтрация по расстоянию 
   if (distance !== 'all') {
    let minDistance = 0
    let maxDistance = Infinity//означает нет ограничения по максимальному расстоянию
  
  // Устанавливаем границы в зависимости от выбранного диапазона
  if (distance === '25') {
    minDistance = 0
    maxDistance = 25  // ограничиваем максимальное расстояние 25 км
  } else if (distance === '50') {
    minDistance = 25
    maxDistance = 50  // ограничиваем максимальное расстояние 50 км
  } else if (distance === '100') {
    minDistance = 50
    maxDistance = 100  // ограничиваем максимальное расстояние 100 км
  }
  
  const interval = Number(event.distance) // Преобразуем расстояние в число
  
  // Если событие выходит за пределы диапазона, исключаем его
    if (interval < minDistance || interval > maxDistance) {
       return false
       }
  }
    
    // фильтрация по категории 
    const categoryMap = {
      socActivities: 'Social Activities',
      hobby: 'Hobbies and Passions',
      business: 'Business',
      technology: 'Technology',
      health: 'Health and Wellbeing' 
    }
    if (
      category !== 'all' &&
      event.category !== categoryMap[category]
    ) {
      return false
    }

    // Если всё прошло — событие подходит
    return true
  })

  displayEvents(filteredEvents)
}

// Накладываем слушатель событий при изменнении селектора и вызываем функцию
typeSelect.addEventListener('change', filterEvents)
distanceSelect.addEventListener('change', filterEvents)
categorySelect.addEventListener('change', filterEvents)

// Отображаем все события при загрузке страницы
displayEvents(eventsStore)



