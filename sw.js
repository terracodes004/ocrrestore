self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Join us for Ocean Cleaning Day! Click here to volunteer with us.',
        icon: 'img/icons/ocean-cleaning.png',
        data: {
            url: 'https://ocrrestore.vercel.app'
        }
    };
    event.waitUntil(
        self.registration.showNotification('Ocean Cleaning Day', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
