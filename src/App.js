import { Button, Card, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors);
  const onSubmit = () => {
    console.log(watch());
    alert(
      `nama : ${watch().nama}\n` +
        `email : ${watch().email}\n` +
        `password : ${watch().password}`
    );
  };
  return (
    <div className="d-flex justify-content-center">
      <Col md="6 m-5">
        <Card>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="my-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  placeholder="nama..."
                  {...register("nama", {
                    required: "nama tidak boleh kosong",
                  })}
                  isInvalid={errors.nama}
                />
                {errors.nama && (
                  <small className="text-danger">{errors.nama.message}</small>
                )}
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="user@gmail.com"
                  {...register("email", {
                    required: "email tidak boleh kosong",
                  })}
                  isInvalid={errors.email}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "password tidak boleh kosong",
                  })}
                  isInvalid={errors.password}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  isInvalid={errors.confirmPassword}
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (watch("password") != val && val != "") {
                        console.log("cuy");
                        return "password tidak sama";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword.message}
                  </small>
                )}
              </Form.Group>
              <Button type="submit" className="col-12">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default App;
