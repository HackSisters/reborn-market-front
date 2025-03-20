import ContactForm from '../../components/users/ContactForm';

const Contact = () => {
    return (
        <div className='flex flex-col items-center gap-2 my-10'>
            <h1 className="text-6xl font-bold font-playfair text-violet text-center mb-4">Contacta con nosotros</h1>
            <h2 className='text-2xl text-center'>Estaremos encantados de ayudarte</h2>
            <ContactForm />
        </div>
    );
}

export default Contact;