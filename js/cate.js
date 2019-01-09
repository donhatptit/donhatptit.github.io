// ViewMore
var viewMore = document.getElementsByClassName("read_more");
var post = document.getElementsByClassName('post-content');
var showPost = document.getElementsByClassName('text_post');
var hiddenSubject = document.getElementsByClassName('subject');
var loading = document.getElementsByClassName('loading')[0];
var page_lik = document.getElementsByClassName('page_link')[0];

for (let i = 0; i <= 1; i++) {
    viewMore[i].onclick = function() {
        viewMore[i].style.display = 'none';
        hiddenSubject[1-i].style.display = 'none';
        post[3].style.opacity = '1.0';
        post[7].style.opacity = '1.0';
        loading.style.display = 'block';
    
        setTimeout(function() {
            axios({
                method: 'GET',
                url: 'https://donhatptit.github.io/post.json',
            }).then((data) => {
                const posts = data.data;
                const postHTML = posts.map(
                    post => 

                    `
                <div class="post-content">
                    <div class="card-post">
                                    <div class="title-post"><a href="">${post.title} </a></div>
                                    <div class="text-author">
                                        <div class="author">
                                            ${post.author}
                                        </div>
                                        <div class="favorite" style="display: flex; justify-content:flex-end;">
                                        <div><img src="images/trang-chu/icon-view.png" alt="icon-view">&nbsp;${post.view}</div>&nbsp;&nbsp;
                                            <div><img src="images/trang-chu/icon-favorite.png" alt="icon-like">&nbsp;${post.like}</div>&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div class="text-content"> ${post.content}</div>

                                </div>
                            </div>
                    `
                );
                showPost[i].innerHTML += `${postHTML.join("")}`;
                setTimeout(function() {
                    loading.style.display = 'none';
                    page_lik.style.display = 'block';
                }, 1);
            });
        }, 1300);
    }
}