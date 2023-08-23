import React from "react";

import "./Order.scss";

const Order = () => {
  const [delivery, setDelivery] = React.useState(1);
  const [payments, setPayments] = React.useState(1);

  return (
    <div className="order">
      <div className="container">
        <div className="order-title">Оформление заказа</div>
        <div className="order-wrapper">
          <div className="order-left">
            <div className="order-wrapper__name">Доставка или самовывоз</div>
            <div className="order-inputs">
              <div className="item">
                <input
                  type="radio"
                  name="delivery_id"
                  value="1"
                  id="deliveries_1"
                  checked
                />
                <label htmlFor="deliveries_1" onClick={() => setDelivery(1)}>
                  Доставка
                </label>
              </div>
              <div className="item">
                <input
                  type="radio"
                  name="delivery_id"
                  value="2"
                  id="deliveries_2"
                />
                <label htmlFor="deliveries_2" onClick={() => setDelivery(2)}>
                  Самовывоз
                </label>
              </div>
            </div>

            <div className="order-wrapper__name who">Кому везем</div>

            <div className="order-block">
              <div className="order-block_item">
                <label htmlFor="name">
                  <span>Имя*</span>
                </label>
                <div className="order-item__input">
                  <input
                    id="name"
                    class="input "
                    name="name"
                    type="text"
                    value=""
                    data-language="form_name"
                    required=""
                  />
                </div>
              </div>
              <div className="order-block_item">
                <label htmlFor="name">
                  <span>Номер телефона*</span>
                </label>
                <div className="order-item__input">
                  <input
                    id="phone"
                    class="input "
                    name="phone"
                    type="text"
                    value=""
                    data-language="form_phone"
                    required=""
                    im-insert="true"
                  />
                </div>
              </div>
              <div className="order-block_item">
                <label htmlFor="name">
                  <span>Email</span>
                </label>
                <div className="order-item__input">
                  <input
                    id="email"
                    class="input "
                    name="email"
                    type="email"
                    value=""
                    data-language="form_email"
                  />
                </div>
              </div>
            </div>

            <div className="order-wrapper__name delivery-address_title">
              {delivery == 1 ? "Куда везем" : "Откуда забирать"}
            </div>

            <div className="order-block delivery-address_block">
              {delivery == 1 ? (
                <div className={`address-delivery `}>
                  <div className="address-block_wrapper">
                    <div className="address-block_item">
                      <input
                        id="street"
                        class="input "
                        type="text"
                        name="street"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="street">Улица*</label>
                    </div>
                    <div className="address-block_item">
                      <input
                        id="house"
                        class="input "
                        type="text"
                        name="house"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="house">Дом*</label>
                    </div>
                    <div className="address-block_item">
                      <input
                        id="building"
                        class="input "
                        type="text"
                        name="building"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="building">Корпус</label>
                    </div>
                    <div className="address-block_item">
                      <input
                        id="apartment"
                        class="input "
                        type="text"
                        name="apartment"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="apartment">Кв./Офис</label>
                    </div>
                    <div className="address-block_item">
                      <input
                        id="entrance"
                        class="input "
                        type="text"
                        name="entrance"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="entrance">Подъезд</label>
                    </div>
                  </div>

                  <div className="address-block_wrapper-dope">
                    <div className="address-block_item">
                      <input
                        id="code"
                        class="input "
                        type="text"
                        name="code"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="code">Код домофона</label>
                    </div>
                    <div className="address-block_item">
                      <input
                        id="floor"
                        class="input "
                        type="text"
                        name="floor"
                        value=""
                        required=""
                        maxlength="255"
                      />
                      <label htmlFor="floor">Этаж</label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="address-pickup">
                  <div className="order-block">
                    <div className="order-block_item">
                      <label htmlFor="name">
                        <span>Магазин для самовывоза*</span>
                      </label>
                      <div className="order-item__input">
                        <div
                          type="text"
                          className="address-pickup__title"
                          id="shop"
                        >
                          <span>Севастополь, ул. Пирогова,25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="order-wrapper__name">Способы оплаты</div>

            <div className="order-payment">
              <div className="order-inputs">
                <div className="item">
                  <input
                    type="radio"
                    name="payments_id"
                    value="1"
                    id="payments_1"
                    checked
                  />
                  <label htmlFor="payments_1" onClick={() => setPayments(1)}>
                    Картой онлайн
                  </label>
                </div>
                <div className="item">
                  <input
                    type="radio"
                    name="payments_id"
                    value="2"
                    id="payments_2"
                  />
                  <label htmlFor="payments_2" onClick={() => setPayments(2)}>
                    Наличными
                  </label>
                </div>
              </div>
              {payments === 2 && (
                <div class="order-block">
                  <div class="order-block_item">
                    <label for="cashback">
                      <span>Сдача с</span>
                    </label>
                    <div class="order-item__input">
                      <input
                        id="cashback"
                        class="input"
                        name="cashback"
                        type="text"
                        value=""
                        placeholder="2000/5000"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="order-wrapper__name">Коментарии к заказу</div>

            <div class="order-block">
              <div class="order-block_item">
                <label for="cashback">
                  <span>Сообщение:</span>
                </label>
                <div class="order-item__input">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="order-right">
            <div class="cart-wrapper__total">
              <span></span>
              <ul>
                <li>
                  <span class="price-title">Итого к оплате:</span>
                  <span class="price-title">6&nbsp;590 ₽</span>
                </li>
                <li>
                  <span class="title">В корзине 1 товара:</span>
                  <span class="price">6&nbsp;590 ₽</span>
                </li>
                <li>
                  <span class="title">Скидка:</span>
                  <span class="price">-1&nbsp;410 ₽</span>
                </li>
              </ul>
              <a href="/order">
                <button class="cart-total__btn">Оформить заказ</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
