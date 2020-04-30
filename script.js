var songNames = ['Verde', 'Sunday Best', 'Everythin I Wanted', 'Savage', 'Toosie Slide', 'Chasin You', 'Memories', 'Level Of Concern', 'Boss Bitch', 'Beautiful Crazy',
            'Blinding Lights', 'THE SCOTTS', 'Living In A Ghost Town', 'Righteous', 'Wrong Places', 'Nobody But You', 'Blueberry Faygo', 'Cool Again', 'Intentions (feat. Quavo)',
          'Circles', 'WHATS POPPIN'];


var songAlbums = ['Colores', 'Where the Light Is', 'Everything I Wanted', 'Suga', 'Toosie Slide', 'If I Know Me', 'Memories', 'Level of Concern', 'Boss Bitch', 'This One',
'Blinding Lights', 'THE SCOTTS', 'The Rolling Stones', 'Righteous', 'Wrong Places', 'Blake Shelton', 'Blueberry Faygo', 'Lenses', 'Intentions', 'Circles (Instrumental)', 'WHATS POPPIN'];


var artists = ['J Balvin', 'Surfaces', 'Billie Eilish', 'Megan Thee Stallion', 'Drake', 'Morgan Wallen', 'Maroon 5', 'Twenty One Pilots', 'Doja Cat', 'Luke Combs',
'The Weeknd', 'Travis Scott', 'The Rolling Stones', 'Juice WRLD', 'H.E.R.', 'Blake Shelton', 'Lil Mosey', 'Shoffy', 'Justin Bieber', 'Post Malone', 'Jack Harlow'];
$(function() {
refreshTable();
});
function addSong() {
var name = $('#inputName').val();
var album = $('#inputAlbum').val();
var artist = $('#inputArtist').val();
songNames.push(name);
songAlbums.push(album);
artists.push(artist);
refreshTable();
document.getElementById("for").reset();

}
function refreshTable() {
var tableBodyString = '';
for (var i = 1; i < songNames.length; i++) {
tableBodyString += '<tr><th scope="row">' + i +'</th>';
tableBodyString += '<td>' + songNames[i] + '</td>';
tableBodyString += '<td>' + songAlbums[i] + '</td>';
tableBodyString += '<td>' + artists[i] + '</td>';
tableBodyString += '</tr>';
}
$('#songsTableBody').html(tableBodyString);
}
