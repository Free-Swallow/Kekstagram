import {createPicture} from './picture.js';
import {createPostList} from './mock.js';
import {changeUploadFile} from './upload-picture.js';
import {showBigPicture} from './full-picture.js';
import './validity.js';
import {findCard} from './util.js';
import './image-editing.js';

const picturesListNode = document.querySelector('.pictures');

const renderPicture = (pictureList) => {
  const fragment = document.createDocumentFragment();

  pictureList.forEach((item) => fragment.appendChild(createPicture(item)));

  picturesListNode.appendChild(fragment);
};

renderPicture(createPostList);

changeUploadFile();

picturesListNode.addEventListener('click', (evt) => {
  if (evt.target.nodeName === 'IMG') {
    showBigPicture(findCard(evt, createPostList));
  }
});
