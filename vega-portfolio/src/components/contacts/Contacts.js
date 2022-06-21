import React from 'react'

function Contacts() {
  return (
    <div className='contacts'>
        <article className="contacts-left">
          <h2>Contact Information</h2>
          <h3>Have Any Questions?</h3>
          <p>Best way to reach me and its many options. I will answer any questions you have.</p>
        </article>
         
        <article className="contacts-right">
          <h2>Contact Us</h2>
          <h3>Send Us An Email</h3>
          <form action="/my-form">
            <div class="form-group">
              <div class="">
                <label for="fname" class="col-form-label">First Name</label>
                <input type="text" class="form-control" id="fname" placeholder="John"/>
              </div>
              <div class="col-6">
                <label for="lname" class="col-form-label">Last Name</label>
                <input type="text" class="form-control" id="lname" placeholder="Doe"/>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-6">
                <label for="email" class="col-form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email"/>
              </div>
              <div class="col-6">
                <label for="subject" class="col-form-label">Subject</label>
                <input type="text" class="form-control" id="subject" placeholder="About..."/>
              </div>
            </div>
            <div class="form-group row">
              <div class="col">                
                <label class="col-form-label" for="message">Message</label>
                <textarea class="form-control" name="message" id="message"></textarea>
              </div>
            </div>
            <div class="form-group row ">
              <div class="text-center">
                <button type="submit" class="btn btn-primary m-3">Send Message</button>
              </div>
            </div>
          </form>
        </article>
    </div>
  )
}

export default Contacts