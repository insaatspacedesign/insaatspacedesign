//Residential Interior Starts here
function showCardModal1(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Modular Kitchen</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/kitchen/IMG_9920.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_9922.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_9918.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_3079.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_3822.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_3077.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_3767.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/kitchen/IMG_9919.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card1Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
   
}

function showCardModal2(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Wardrobe</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/wardrobe/IMG_0697.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_0709.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_1499.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_2393.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_3061.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_3043.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_3078.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/wardrobe/IMG_3758.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>

                                
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card2Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
}

function showCardModal3(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Pooja Room</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/poojaroom/IMG_1285.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_3084.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_0832.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_3066.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_1904.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_3769.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_1903.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"  src="/Residential/poojaroom/IMG_3065.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card3Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
}

function showCardModal4(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Tv Unit</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/tvunit/IMG_4555.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_3085.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_3083.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_3054.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_2692.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_9924.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_1910.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/tvunit/IMG_9923.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card4Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
}

function showCardModal5(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Living Room</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/livingroom/IMG_1906.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/livingroom/IMG_0283.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/livingroom/IMG_1291.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/livingroom/IMG_1508.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/livingroom/IMG_2392.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"src="/Residential/livingroom/IMG_2699.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/livingroom/IMG_3765.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/livingroom/IMG_9914.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card5Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
}

function showCardModal6(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">False Ceiling</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/falseceiling/IMG_0696.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_1529.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_3317.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_8411.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_3322.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_8494.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_8624.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/falseceiling/IMG_2635.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card6Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
}

function showCardModal7(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Study Table</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/studytable/IMG_0937.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/studytable/IMG_0938.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add"src="/Residential/studytable/IMG_0939.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/studytable/IMG_0940.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/studytable/IMG_0941.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/studytable/IMG_3048.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/studytable/IMG_0942.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/studytable/IMG_0936.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt"onclick="openContactPopup(event,card7Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    }
}

function showCardModal8(cardId) {
    const card = document.getElementById(cardId);

    if (card) {
        const cardImageSrc = card.querySelector('.card-img-top').src;

        const modalContent = `
            <div class="modal fade" id="${cardId}Modal" tabindex="-1" aria-labelledby="${cardId}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content resint">
                        <div class="modal-header mb-0" style="height: 45px;">
                            <h5 class="modal-title" id="${cardId}ModalLabel">Bed Room</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body resintbod">
                            <!-- Image Container -->
                            <div class="img-container resimgmain">
                                <img src="${cardImageSrc}" class="img-fluid custom-modal-image" alt="Card Image">
                            </div>
                            <div class="additional-content cardresint">
                                <h6 class="mt-2">Related Images</h6>
                                <!-- Image Card in the Additional Content -->
                                <div class="card extracard"  onclick="showImageInModal(event)">
                                  <div class= "row row-cols-3 row-cols-md-2 g-0">
                                    <div class="card-body col-6">
                                        <img id="add" src="/Residential/bedroom/IMG_1913.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_1914.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_2693.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_2694.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_2697.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_2704.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_3759.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                    <div class="card-body">
                                        <img id="add" src="/Residential/bedroom/IMG_1915.JPG" class="img-fluid additional-image" alt="Additional Image">
                                    </div>
                                   </div>
                                </div>
                                    <div id="subbut">
                                    <button type="button" class="btn btn-dark mt-2 sessbutt" onclick="openContactPopup(event,card8Modal)">Book Design Session</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove any existing modals
        $('#cardModals').children().remove();

        // Append the modal to the container
        $('#cardModals').append(modalContent);

        // Show the modal
        $(`#${cardId}Modal`).modal('show');
    } 
}


function showImageInModal(event) {
    // Update the source of the existing modal image
    const modalImage = document.querySelector('.modal.show .img-container img');
    if(event.target.id=="add"){
    const imageSrc = event.target.src
    if (modalImage) {
        modalImage.src = imageSrc;
    }
    }

    // Show the existing modal
    $('.modal.show').modal('show');
}

//residential exterior starts here
document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
  
    imageContainers.forEach(container => {
      container.addEventListener('click', function () {
        const image = container.querySelector('img');
        const captionHTML = container.querySelector('.image-caption').innerHTML;
  
        modalImage.src = image.src;
        modalCaption.innerHTML = captionHTML;
  
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
      });
    });
  });










//residential exterior starts here
document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
  
    imageContainers.forEach(container => {
      container.addEventListener('click', function () {
        const image = container.querySelector('img');
        const captionHTML = container.querySelector('.image-caption').innerHTML;
  
        modalImage.src = image.src;
        modalCaption.innerHTML = captionHTML;
  
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
      });
    });
  });





  let scrollPosition = 0;

  function openContactPopup(event,cardId) {
       event.preventDefault();
       $(cardId).modal('hide');
  
      // Store the current scroll position
      scrollPosition = window.scrollY;
  
      // Prevent scrolling of the background content
      document.body.style.overflow = 'hidden';
  
      // Add a class to indicate an active popup
      document.body.classList.add("active-popup");
  
      // Scroll to the contact popup
      const contactPopup = document.querySelector('.contact-popup');
      contactPopup.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  function closeContactPopup() {
      // Restore the scroll position
      window.scrollTo(0, scrollPosition); 
  
      // Allow scrolling of the background content
      document.body.style.overflow = 'auto';
  
      // Remove the class indicating an active popup
      document.body.classList.remove("active-popup");
  }