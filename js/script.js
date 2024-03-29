// @ts-nocheck
fetch("https://retoolapi.dev/fjhmWf/data")
  .then((response) => response.json())
  .then((jops) => {
    // Display jops on page
    const jopsDiv = document.querySelector("#generate-jops");
    displayjops(jops, jopsDiv);
  });

// Display jops on page
function displayjops(jops, jopsDiv) {
  jopsDiv.innerHTML = "";
  jops.forEach((jop) => {
    const jopdiv = document.createElement("div");
    jopdiv.innerHTML = `
    <div class="jops" id="jops">
                  <div class="row py-4">
                    <div class="col">
                      <h3 class="jop-title my-0 p-sm-right">
                        <a href="#" class="jop-title-link  ps-3"
                          >${jop.Title}</a
                        >
                      </h3>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div>
                      <small class="inline-block text-tan fixed-p">
                        <strong class="fixed-p   ps-3">Fixed Price</strong>
                        <span>
                          <span>${jop.pricing}</span>
                          <span >${jop.posttime}</span>
                        </span>
                      </small>
                    </div>
                    <div class="mt-2">
                      <div class="position-relative">
                        <span class="jop-desc   ps-3">
                          ${jop.description}
                        </span>
                      </div>
                    </div>
                    <div class="mt-2">
                      <div>
                        <small class="d-inline-block mr-10"
                          ><span class="text-tan   ps-3">Proposals: </span>
                          <strong class="propo">${jop.proposal} </strong></small
                        >
                        <!---->
                      </div>
                    </div>
                    <div class="mt-2 badge-line">
                      <span class="d-inline-flex   ps-3">${jop.payment}</span>
                      <small class="d-inline-block">
                        <strong><span>${jop.rating}</span></strong>
                        <span class="text-tan ml-2">spent: ${jop.budget}k</span></small
                      >
                      <small
                        data-test="client-country"
                        class="d-none d-lg-inline-flex text-muted"
                        ><div class="up-icon inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            viewBox="0 0 14 14"
                            role="img"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"
                            ></path>
                          </svg>
                        </div>
                        &nbsp;
                        <strong>${jop.location}</strong></small
                      >
                    </div>
                  </div>
                </div>
    `;
    jopsDiv.appendChild(jopdiv);
  });
}
