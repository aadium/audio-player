fetch('../audioDetails.csv')
    .then(response => response.text())
    .then(text => {
        const rows = text.split('\n').slice(1);
        const container = document.getElementById('song-container');

        for (let i = 0; i < rows.length; i += 2) {
            const row = document.createElement('div');
            row.className = 'song-row';

            for (let j = 0; j < 2 && (i + j) < rows.length; j++) {
                const [audio, image, song, artist] = rows[i + j].split(',');

                const card = document.createElement('div');
                card.className = 'card';

                const link = document.createElement('a');
                link.href = `pages/audio_player.html?audio=${audio}&image=${image}&song=${encodeURIComponent(song)}&artist=${encodeURIComponent(artist)}`;
                link.className = 'audio-link';

                const img = document.createElement('img');
                img.className = 'audio-image';
                img.src = `images/${image}.jpg`;
                img.alt = song;

                const title = document.createElement('p');
                title.className = 'audio-title';
                title.textContent = song;

                const artistName = document.createElement('p');
                artistName.className = 'artist-name';
                artistName.textContent = artist;

                link.appendChild(img);
                link.appendChild(title);
                link.appendChild(artistName);
                card.appendChild(link);
                row.appendChild(card);
            }

            container.appendChild(row);
        }
    })
    .catch(error => {
        console.error('Error fetching or processing CSV:', error);
    });
